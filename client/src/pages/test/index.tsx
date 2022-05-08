import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
const Test = () => {
  //////

  const router = useRouter();

  useEffect(() => {
    if (router.query.target) {
      let elem = document.getElementById(router.query.target);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [router]);

  return (
    <div>
      <h1>평균 등수 순위</h1>
      <h2>버전: 12.6</h2>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1 id="112">kkkkkkkkkkkkkkkkkkkkkk</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1 id="114">avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
      <h1>avbabbbbbbbbbbbbbbbbbb</h1>
    </div>
  );
};

export default Test;
