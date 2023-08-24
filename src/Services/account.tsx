import { get } from './http';
// import { errorHandling } from './error';

const getAccountDetails = async (token: string) => {
  try {
    return await get(`analytics/accountSummaries?accessToken=${token}`);
  } catch (err) {
    return err;
  }
};

export { getAccountDetails };
