import { ApiManager, handleCheckToken } from "./ApiManager";

export const findAllUser = async (token) => {
  try {
    handleCheckToken();
    const result = await ApiManager("", {
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
