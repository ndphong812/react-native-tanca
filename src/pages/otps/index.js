import { View, StyleSheet, Image } from "react-native";
import { VStack, Button, Text, Box } from "native-base";
import { theme } from "utils/css";
import { useNavigation } from "@react-navigation/native";
import { addUser } from "redux/auths/action";
import { useDispatch, useSelector } from "react-redux";
import AuthsLayout from "layouts/auths";
import { authStyles } from "styles/auths";
import OTPTextInput from "react-native-otp-textinput";
import { useState } from "react";
import { otpLength } from "utils/data";
import uuid from "react-native-uuid";
import DialogBox from "components/dialog";

const OtpPage = () => {

  const dispatch = useDispatch();

  const selector = useSelector((state) => state.auths);

  const currenrRegister = selector.currenrRegister;

  const [otp, setOtp] = useState("");

  const [valid, setValid] = useState(false);

  const [visible, setVisible] = useState(false);

  const setOtpText = (e) => {
    setValid(e.length === otpLength);
    setOtp(e);
  };

  const handleSendOtp = () => {
    const user = {
      ...currenrRegister,
      otp: otp,
      id: uuid.v4().slice(0, 6),
    };
    dispatch(addUser(user));
    setVisible(true);
  };
  return (
    <AuthsLayout>
      <View style={authStyles.authForm}>
        <Box style={authStyles.title}>
          <Text style={authStyles.subTitle} fontSize="2xl" lineHeight={"md1"}>
            Xác minh mã OTP
          </Text>
          {Object.keys(currenrRegister).length > 0 &&
            currenrRegister.phoneNumber && (
              <Text style={authStyles.bodyTitle} fontSize="md" lineHeight="xs">
                Nhập mã OTP gửi đến {selector.currenrRegister.phoneNumber}
              </Text>
            )}
        </Box>
        <VStack style={[authStyles.inputForm]}>
          <OTPTextInput
            inputCount={5}
            handleTextChange={(e) => setOtpText(e)}
            textInputStyle={authStyles.otpsTextInput}
            offTintColor={theme.colors.muted[300]}
            tintColor={theme.colors.primary[50]}
          />
          <Button
            onPress={() => handleSendOtp()}
            style={[
              authStyles.submitBtn,
              valid ? authStyles.ableBtn : authStyles.disableBtn,
            ]}
            _text={authStyles.textBtn}
            disabled={!valid}
          >
            Đồng ý
          </Button>
        </VStack>
        <Text
          style={authStyles.authBottomTitle}
          fontSize="md"
          color="singletons.50"
        >
          Gửi lại sau <Text style={authStyles.authBottomTitleBold}>(36s)</Text>
        </Text>
        <DialogBox visible={visible} setVisible={setVisible} />
      </View>
    </AuthsLayout>
  );
};

const styles = StyleSheet.create({
  registerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  closeAction: {
    paddingHorizontal: 20,
  },
  arrowGroup: {
    paddingRight: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: theme.colors.muted[100],
  },
});

export default OtpPage;
