export const requests = async (endPoint: string, headers?: HeadersInit) => {
  try {
    const res = headers
      ? await fetch(`${endPoint}`, {
          headers,
        })
      : await fetch(`${endPoint}`);

    if (!res.ok) {
      const {
        status: { message, status_code },
      } = await res.json();

      throw new Error(`서버의 상태가 이상합니다. ${message}, status_code: ${status_code}`);
    }

    return await res.json();
  } catch (e: any) {
    throw new Error(`에러가 발생했습니다. ${e.message}`);
  }
};
