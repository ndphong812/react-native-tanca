import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Dialog from "react-native-dialog";
import { authStyles } from "styles/auths";
import { Button, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { WHITE } from "utils/css";
import { Dimensions } from "react-native";

const DialogBox = ({ visible, setVisible }) => {

  const navigation = useNavigation();

  const handleCancel = () => {
    setVisible(false);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Dialog.Container contentStyle={styles.dialog} visible={visible}>
        <Dialog.Title style={[styles.centerTitle]}>
          <Text style={authStyles.subTitle} fontSize="2xl" lineHeight="lg">
            Chúc mừng bạn đã đăng ký thành công
          </Text>
        </Dialog.Title>
        <Dialog.Description style={[styles.centerTitle, styles.descTitle]}>
          <Text style={authStyles.bodyTitle} fontSize="md" lineHeight="sm">
            Tanca đưa ra các giải pháp chấm công toàn diện cho doanh nghiệp.
          </Text>
        </Dialog.Description>
        <View style={styles.btnContainer}>
          <Button
            onPress={handleCancel}
            style={[authStyles.submitBtn, authStyles.ableBtn, styles.closeBtn]}
            _text={authStyles.textBtn}
          >
            Đồng ý
          </Button>
        </View>
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  dialog: {
    paddingBottom: 24,
    paddingTop: 16,
    borderRadius: 15,
    width: Dimensions.get("window").width - 40,
  },
  centerTitle: {
    textAlign: "center",
  },
  descTitle: {
    paddingVertical: 10,
  },
  closeBtn: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 0,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default DialogBox;
