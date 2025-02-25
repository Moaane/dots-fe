import { ApiManager, handleCheckToken } from "./ApiManager";

export const FindPaymentMethod = async (token) => {
  try {
    handleCheckToken();
    const result = ApiManager(`/payment-method`, {
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
