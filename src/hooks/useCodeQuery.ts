import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const useCodeQuery = () => {
  const [code, setCode] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const { code: codeFromUrl } = queryString.parse(location.search);
    if (typeof codeFromUrl === 'string') {
      setCode(codeFromUrl);
    }
  }, [location.search]);
  return {
    code,
  };
};
