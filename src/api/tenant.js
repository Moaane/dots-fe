import { ApiManager, handleCheckToken } from "./ApiManager";

export const findTenantByid = async (id) => {
  try {
    handleCheckToken();
    const result = ApiManager(`/tenant/${id}`, {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
