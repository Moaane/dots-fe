import axios from "axios";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
import { AuthContext } from "../providers/AuthenticationProvider";

export const handleCheckToken = async ()  => {
  // const { logout, exp } = useContext(AuthContext);
  // const storage = await SecureStore.getItemAsync('authInfo');
  // const data = JSON.parse(storage)
  // // const exp = data.data.exp
  // const expToken = 1700031443700;
  // // const expToken = exp * 1000;
  // const currentTime = new Date().getTime();

  // console.log("exp : ", expToken);
  // console.log("now : ", currentTime);

  // if (expToken && expToken < currentTime) {
  //   Alert.alert(
  //     "Session Expired",
  //     "Your session has expired. Please log in again.",
  // [
  //   {
  //     text: "OK",
  //     onPress: () => {
  //       logout();
  //     },
  //   },
  // ],
  // { cancelable: false }
  //   );
  // }
};

export const ApiManager = axios.create({
  baseURL: API_URL,
  responseType: "json",
  withCredentials: true,
});
