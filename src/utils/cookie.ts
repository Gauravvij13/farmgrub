import cookie, { CookieSerializeOptions, CookieParseOptions } from 'cookie';

export function loadCookie<T = any>(
  name: string,
  doNotParse?: boolean,
  opt?: CookieParseOptions,
): T | undefined {
  const cookies = cookie.parse(document.cookie, opt);
  let cookieVal = cookies && cookies[name];

  if (typeof doNotParse === 'undefined') {
    // eslint-disable-next-line
    doNotParse = !cookieVal || (cookieVal[0] !== '{' && cookieVal[0] !== '[');
  }

  if (!doNotParse) {
    try {
      cookieVal = JSON.parse(cookieVal);
    } catch (e) {
      // Not serialized object
    }
  }

  return cookieVal as any;
}

export function saveCookie(name: string, val: any, opt?: CookieSerializeOptions) {
  document.cookie = cookie.serialize(
    name,
    typeof val === 'object' ? JSON.stringify(val) : val,
    opt,
  );
}

export function removeCookie(name: string, opt?: CookieSerializeOptions) {
  if (typeof document !== 'undefined') {
    document.cookie = cookie.serialize(name, '', {
      ...opt,
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    });
  }
}
