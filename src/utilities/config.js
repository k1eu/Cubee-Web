import getNextConfig from 'next/config';

export const getConfig = () => {
  const config = getNextConfig();
  return {
    ...config.publicRuntimeConfig,
    ...config.serverRuntimeConfig,
  };
};