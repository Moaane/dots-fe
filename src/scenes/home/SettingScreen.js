import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Headline, Button, List, Divider } from "react-native-paper";
import { AuthContext } from "../../providers/AuthenticationProvider";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  const handleChangePasswordPress = () => {
    navigation.navigate("ChangePassword");
  };

  return (
    <View style={styles.screen}>
      <View style={Color.primaryBackgroundColor}>
        <Headline style={styles.heading}>Pengaturan</Headline>
      </View>

      <List.Item
        style={styles.settingMenuButton}
        title="Ubah Password"
        onPress={handleChangePasswordPress}
      />
      <Divider />
      <List.Item
        style={styles.settingMenuButton}
        titleStyle={{ color: "#E74C3C", fontWeight: "bold" }}
        title="Keluar"
        onPress={() => {
          Alert.alert(
            "Perhatian",
            "Apakah anda yakin ingin keluar?",
            [{ text: "Keluar", onPress: logout }],
            { cancelable: true }
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F5F8FB",
    flex: 1,
  },
  heading: {
    marginTop: "15%",
    fontSize: 30,
    marginLeft: "5%",
    paddingBottom: "2%",
    color: "white",
  },
  settingMenuButton: {
    backgroundColor: "white",
  },
});

export default SettingScreen;
