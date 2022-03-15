export const requests = async (endPoint: string, headers: HeadersInit) => {
  try {
    const res = await fetch(`${endPoint}`, {
      headers,
    });

    if (!res.ok) {
      throw new Error('서버의 상태가 이상합니다');
    }

    return await res.json();
  } catch (e: any) {
    throw new Error(`에러가 발생했습니다. ${e.message}`);
  }
};
