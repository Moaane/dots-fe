import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
  Modal,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Headline, Appbar, Subheading, Caption } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import Color from "../../common/Color";
import DropDown from "react-native-paper-dropdown";
import { createLoanTopup } from "../../api/LoanApi";
import { AuthContext } from "../../providers/AuthenticationProvider";

const LoanTopupRequest = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);

  const showConfirmModal = () => {
    setConfirmModalVisible(true);
  };

  const hideConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  const handleTextInputFocus = () => {
    setIsFocused(true);
  };

  const handleTextInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (text) => {
    const cleanedText = text.replace(/[^\d]/g, "");
    const numericValue = Number.parseInt(cleanedText, 10);

    if (!isNaN(numericValue)) {
      const formattedValue = "Rp. " + numericValue.toLocaleString();
      setAmount(formattedValue);
    } else {
      setAmount("Rp. ");
    }
  };

  const [showDropDown, setShowDropDown] = useState(false);
  const [JangkaDropdown, setJangkaDropdown] = useState("");
  const Jangka = [
    { label: 1 + " bulan", value: 1 },
    { label: 3 + " bulan", value: 3 },
    { label: 6 + " bulan", value: 6 },
    { label: 9 + " bulan", value: 9 },
    { label: 12 + " bulan", value: 12 },
    { label: 18 + " bulan", value: 18 },
    { label: 24 + " bulan", value: 24 },
    { label: 36 + " bulan", value: 36 },
  ];

  const route = useRoute();
  const { id } = route.params;
  const { token } = useContext(AuthContext);

  const [amount, setAmount] = useState("Rp. ");
  const [reason, setReason] = useState(null);

  const handleSubmit = () => {
    if (!amount) {
      Alert.alert("Error", "Kolom Jumlah Belum Di isi.");
    } else if (!reason) {
      Alert.alert("Error", "Kolom Alasan Belum Di isi.");
    } else {
      Alert.alert(
        "Konfirmasi",
        "Pastikan data yang anda masukan sudah benar",
        [
          {
            text: "Batal",      
            onPress: () => "Transaksi dibatalkan",
            style: "cancel",
          },
          {
            text: "Ya",
            onPress: async () => {
              try {
                createLoanTopup(token, {
                  loanId: id,
                  amount: parseInt(amount.replace(/[^0-9]/g, "")),
                  reason: reason,
                }).then((result) => {
                  navigation.goBack();
                  Alert.alert(
                    "Sukses",
                    "Berhasil Mengajukan TopUp. Silahkan cek notifikasi secara berkala"
                  );
                });
              } catch (error) {
                console.error("API Error:", error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Pengajuan Topup" />
      </Appbar.Header>

      <View style={styles.box}>
        <Text>Nomor Rekening</Text>
        <TextInput
          style={styles.input}
          underlineColor=""
          onFocus={handleTextInputFocus}
          onBlur={handleTextInputBlur}
          placeholder={id}
          disabled
        />

        <Text style={styles.text}>Jumlah</Text>
        <TextInput
          style={styles.input}
          underlineColor=""
          placeholder={isFocused ? "Rp." : ""}
          placeholderTextColor="#999999"
          onFocus={handleTextInputFocus}
          onBlur={handleTextInputBlur}
          keyboardType="numeric"
          value={amount}
          onChangeText={handleInputChange}
        />

        <Text style={styles.text}>Alasan</Text>
        <TextInput
          style={styles.input}
          underlineColor="transparent"
          placeholderTextColor="#999999"
          value={reason}
          onChangeText={(text) => setReason(text)}
        />
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Konfirmasi",
              "Pastikan data yang anda masukan sudah benar",
              [
                {
                  text: "Batal",
                  onPress: () => "Transaksi dibatalkan",
                  style: "cancel",
                },
                {
                  text: "Ya",
                  onPress: async () => {
                    try {
                      createLoanTopup(token, {
                        loanId: id,
                        amount: parseInt(amount.replace(/[^0-9]/g, "")),
                        reason: reason,
                      }).then((result) => {
                        navigation.goBack();
                        Alert.alert(
                          "Sukses",
                          "Berhasil Mengajukan TopUp. Silahkan cek notifikasi secara berkala"
                        );
                      });
                    } catch (error) {
                      console.error("API Error:", error);
                    }
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <Button style={styles.btn}>
            <Text style={styles.btnSubmit}>SUBMIT</Text>
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
  },

  txt: {
    fontSize: 25,
    marginTop: Platform.select({
      android: 30,
    }),
  },
  arrow: {
    marginLeft: Platform.select({
      ios: 10,
      android: 10,
    }),
    marginTop: Platform.select({
      android: 30,
    }),
    marginRight: Platform.select({
      ios: 15,
      android: 15,
    }),
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  btn: {
    backgroundColor: Color.primaryBackgroundColor.backgroundColor,
    marginTop: 20,
  },
  btnSubmit: {
    color: "#ffffff",
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#080808",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 18,
  },

  confirmModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  confirmModal: {
    backgroundColor: "white",
    width: 300,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  confirmModalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  cancelButton: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  confirmButton: {
    color: "#041562",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoanTopupRequest;
