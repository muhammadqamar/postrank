import { get } from "./http";

const checkDomain = async () => {
  try {
    return await get(`/`, {
      TenantId: process.env.REACT_APP_TENANT_ID,
    });
  } catch (err) {
    return err;
  }
};
export { checkDomain };
