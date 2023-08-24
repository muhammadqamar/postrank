/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccountDetails } from "../../Services/account";
import { store } from "../../store";
import { setUserAccountDetails } from "../reducers/accountDetails";
const getAccountdetailsAction = async (
  codeResponse: string,
  setActiveTab: any,
) => {
  const result: any = await getAccountDetails(codeResponse);
  if (result.data) {
    setActiveTab("connectProject");
    store.dispatch(setUserAccountDetails(result.data));
  }
  return result;
};

export { getAccountdetailsAction };
