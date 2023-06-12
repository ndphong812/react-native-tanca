import { View } from "react-native";
import { VStack, Button, Text, Box } from "native-base";
import { theme } from "utils/css";
import { useNavigation } from "@react-navigation/native";
import { LOGIN_USER, REGISTER_USER, addUser } from "redux/auths/action";
import { useDispatch, useSelector } from "react-redux";
import AuthsLayout from "layouts/auths";
import { authStyles } from "styles/auths";
import OTPTextInput from "react-native-otp-textinput";
import { useState, useRef, useEffect } from "react";
import { otpLength } from "utils/data";
import uuid from "react-native-uuid";
import DialogBox from "components/dialog";
import { loginRequest } from "redux/auths/action";

const OtpPage = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const selector = useSelector((state) => state.auths);

  const currenrRegister = selector.currenrRegister;

  const currentLogin = selector.currentLogin;

  const [otp, setOtp] = useState("");

  const otpInput = useRef(null);

  const [valid, setValid] = useState(false);

  const [visible, setVisible] = useState(false);

  const setOtpText = (e) => {
    setValid(e.length === otpLength);
    setOtp(e);
  };

  const otpType = selector.action;

  const handleSendOtp = () => {
    if (otpType === REGISTER_USER) {
      const user = {
        ...currenrRegister,
        otp: otp,
        id: uuid.v4().slice(0, 6),
      };
      dispatch(addUser(user));
      setVisible(true);
    }
    if (otpType === LOGIN_USER) {
      dispatch(
        loginRequest({
          phoneNumber: currentLogin.phoneNumber,
          otp: otp,
        })
      );
    }
    if (otpInput.current) {
      otpInput.current.clear();
    }
    setOtp("");
  };

  useEffect(() => {
    if (selector.isLoggedIn) {
      navigation.navigate("Home");
    }
  }, [selector.isLoggedIn]);

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
            defaultValue={otp}
            inputCount={5}
            handleTextChange={(e) => setOtpText(e)}
            textInputStyle={authStyles.otpsTextInput}
            offTintColor={theme.colors.muted[300]}
            tintColor={theme.colors.primary[50]}
            ref={otpInput}
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

export default OtpPage;
