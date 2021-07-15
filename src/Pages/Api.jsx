import userEvent from '@testing-library/user-event';

const baseURL = 'http://localhost:3036/prestador';

export function GETDADOS() {
  return {
    url: baseURL,
    options: { method: 'GET' },
  };
}
