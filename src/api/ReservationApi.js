import { ApiManager, handleCheckToken } from "./ApiManager";

export const createReservationRest = async (token, data) => {
  try {
    handleCheckToken();
    const result = await ApiManager("/create-reservation", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const findReservationById = async (token, id) => {
  try {
    handleCheckToken();
    const result = await ApiManager(``, {
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
