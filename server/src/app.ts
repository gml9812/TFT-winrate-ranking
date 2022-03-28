// request 처리 수정

import appRoot from "app-root-path";
import bodyParser from "body-parser";
import express from "express";
import axios, { AxiosResponse } from "axios";
import { routes } from "./api/routes";
import {
  createUser,
  findUser,
  updateUser,
  deleteUser,
} from "./modules/database/schema/challengerUser";
import { API } from "./commons";

let INDEX = 0;

const app = express();
const PORT = 10100;

app.set("trust proxy", 1);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

const updateUserInfo = async () => {
  try {
    // 전체 challenger 리스트 받아오기

    const krChallengerResponse = await axios({
      url: `https://kr.api.riotgames.com/tft/league/v1/challenger`,
      method: "GET",
      headers: API.HEADER,
    });
    const krChallenger = krChallengerResponse.data;

    const krChallengerEntries = krChallenger.entries;
    krChallengerEntries.sort((a, b) =>
      a.summonerName > b.summonerName
        ? 1
        : b.summonerName > a.summonerName
        ? -1
        : 0
    );

    // 이번 차례에 검색할 플레이어 받아오기
    const searchPlayer = krChallengerEntries[INDEX];
    INDEX = INDEX === 300 ? 0 : INDEX + 1;

    // summoner Id로 검색
    const { summonerId } = searchPlayer;

    const summonerInfoResponse = await axios({
      url: `https://kr.api.riotgames.com/tft/summoner/v1/summoners/${summonerId}`,
      method: "GET",
      headers: API.HEADER,
    });
    const summonerInfo = summonerInfoResponse.data;

    const summonerPuuid = summonerInfo.puuid;

    const matchNamesResponse = await axios({
      url: `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${summonerPuuid}/ids?count=20`,
      method: "GET",
      headers: API.HEADER,
    });
    const matchNames = matchNamesResponse.data;

    const matchDatas = await Promise.all(
      matchNames.map((match: string) => {
        return axios({
          url: `https://asia.api.riotgames.com/tft/match/v1/matches/${match}`,
          method: "GET",
          headers: API.HEADER,
        });
      })
    );

    const placements = matchDatas.map(
      (matchData: {
        data: {
          info: {
            game_version: string;
            participants: {
              puuid: number;
              placement: number;
            }[];
          };
        };
      }) => {
        if (matchData.data.info.game_version !== API.CURRENT_PATCH_VERSION)
          return 4; //평균등수 리턴

        const place = matchData.data.info.participants.filter(
          (participant: { puuid: number }) =>
            participant.puuid === summonerPuuid
        );

        return place[0].placement;
      }
    );

    // DB 수정
    // 만약 이미 해당 소환사 존재하면 정보만 수정
    const [, userInfo] = await findUser({
      summonerName: searchPlayer.summonerName,
    });
    console.log(userInfo);

    if (userInfo.length === 0) {
      const updatedUser = await createUser({
        summonerName: searchPlayer.summonerName,
        averagePlacement:
          placements.reduce((prev: number, curr: number) => prev + curr) / 20,
      });
    } else {
      const updatedUser = await updateUser(
        {
          summonerName: searchPlayer.summonerName,
        },
        {
          averagePlacement:
            placements.reduce((prev: number, curr: number) => prev + curr) / 20,
        }
      );
    }
  } catch (e) {
    console.log(e);
  }
};
setInterval(updateUserInfo, 80000);

export { app, PORT };
