import { ApiManager, handleCheckToken } from "./ApiManager";

export const findAllImage = async () => {
  try {
    handleCheckToken();
    const result = ApiManager("", {
      method: "GET",
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
