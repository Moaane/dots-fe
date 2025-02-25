import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "./HomeNavigation";
import BlogScreen from "../scenes/blogs/BlogsScreen";
import SavingAccountDetailScreen from "../scenes/account/SavingAccountDetailScreen";
import LoanAccountDetailScreen from "../scenes/account/LoanAccountDetailScreen";
import AttendanceReservationScreen from "../scenes/attendanceReservation/AttendanceReservationScreen";
import DepositAccountDetailScreen from "../scenes/account/DepositAccountDetailScreen";
import SavingDepositRequestScreen from "../scenes/account/SavingDepositRequestScreen";
import ChangePasswordScreen from "../scenes/authentication/ChangePasswordScreen";
import CreateSavingAccount from "../scenes/CreateAccount/CreateSavingAccount";
import CreateDepositAccount from "../scenes/CreateAccount/CreateDepositAccount";
import CreateLoanAccount from "../scenes/CreateAccount/CreateLoanAccount";
import LoanRepaymentScheduleScreen from "../scenes/account/LoanRepaymentScheduleScreen";
import LoanTopupRequestScreen from "../scenes/account/LoanTopupRequestScreen";
import LoanPaymentScreen from "../scenes/account/LoanPaymentScreen";
import PaymentMethodSelectionScreen from "../components/PaymentMethodSelectionScreen";
import QRCodeScreen from "../common/QRCodeScreen";
import { AuthContext } from "../providers/AuthenticationProvider";

const AppNavigation = () => {
  const AppNavigator = createStackNavigator();

  // const { user, exp } = useContext(AuthContext);
  // const expToken = exp * 1000;
  // const currentTime = new Date().getTime();

  // console.log("exp : ", expToken);
  // console.log("now : ", currentTime);

  // if (expToken && expToken < currentTime) {
  //   Alert.alert(
  //     "Session Expired",
  //     "Your session has expired. Please log in again.",
  //     [
  //       {
  //         text: "OK",
  //         onPress: () => {
  //           logout();
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // }

  // const GraphqlClient = createGraphqlClient();
  return (
    // <ApolloProvider client={GraphqlClient}>
    <AppNavigator.Navigator initialRouteName="Home">
      <AppNavigator.Screen
        name="Home"
        component={HomeNavigation}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="Blog"
        component={BlogScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="SavingDetail"
        component={SavingAccountDetailScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="DepositDetail"
        component={DepositAccountDetailScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="LoanDetail"
        component={LoanAccountDetailScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="AttendanceReservation"
        component={AttendanceReservationScreen}
        options={{ headerShown: false }}
      />
      {/* <AppNavigator.Screen
          name="AttendanceReservationSuccess"
          component={AttendanceReservationSuccessScreen}
          options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="RestructureRequest"
          component={RestructureRequestScreen}
          options={{headerShown: false}}
        /> */}
      <AppNavigator.Screen
        name="SavingDepositRequest"
        component={SavingDepositRequestScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="CreateSavingAccount"
        component={CreateSavingAccount}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="CreateLoanAccount"
        component={CreateLoanAccount}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="CreateDepositAccount"
        component={CreateDepositAccount}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="LoanRepaymentScheduleScreen"
        component={LoanRepaymentScheduleScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="LoanTopupRequest"
        component={LoanTopupRequestScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="LoanPayment"
        component={LoanPaymentScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="PaymentMethodSelection"
        component={PaymentMethodSelectionScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{ headerShown: false }}
      />
    </AppNavigator.Navigator>
    // </ApolloProvider>
  );
};

export default AppNavigation;
