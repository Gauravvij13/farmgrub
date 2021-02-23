export const AUTH_KEYS = {
  USER_DATA: 'userData',
  TOKEN: 'token',
};

export const handleLogout = (redirect: boolean) => {
  Object.values(AUTH_KEYS).forEach(value => {
    localStorage.removeItem(value);
  });
  if (redirect) {
    window.location.href = '/signin';
  }
};
