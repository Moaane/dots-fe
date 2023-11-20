import axios from "axios";
import { ApiManager, handleCheckToken } from "./ApiManager";

export const findAllOffices = async (token) => {
  try {
    handleCheckToken();
    const result = ApiManager("/office", {
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
