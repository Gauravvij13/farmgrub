import { useState, useEffect } from 'react';
import _ from 'lodash';

export function useMediaQuery(mediaQueryString: string, debounce = 500) {
  const [queryMatch, setQueryMatch] = useState(
    () => mediaQueryString === 'all' || window.matchMedia(mediaQueryString).matches,
  );
  useEffect(() => {
    let debouncedHandleResize: any;
    if (mediaQueryString !== 'all') {
      debouncedHandleResize = _.debounce(function handleResize() {
        setQueryMatch(window.matchMedia(mediaQueryString).matches);
      }, debounce);

      window.addEventListener('resize', debouncedHandleResize);
    }

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [mediaQueryString, debounce]);
  return queryMatch;
}
