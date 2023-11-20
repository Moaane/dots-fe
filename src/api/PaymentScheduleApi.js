import { ApiManager, handleCheckToken } from "./ApiManager";

export const findPaymentScheduleById = async (token, id) => {
  try {
    handleCheckToken();
    const result = ApiManager(``, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
