import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';

const LinkP = () => {
  /////

  const router = useRouter();
  return (
    <>
      <button
        onClick={() =>
          router.push({
            pathname: '/test',
            query: {
              target: '112',
            },
          })
        }
      >
        link
      </button>
    </>
  );
};

export default LinkP;
