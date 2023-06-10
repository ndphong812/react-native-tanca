import { View, StyleSheet, TextInput, Image } from "react-native";
import { VStack, Button, Text, Box } from "native-base";
import { theme } from "utils/css";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { changeCurrentRegister } from "redux/auths/action";
import { useDispatch } from "react-redux";
import AuthsLayout from "layouts/auths";
import { authStyles } from "styles/auths";
import downArrowIcon from "assets/icons/down-arrow.png";
import userIcon from "assets/icons/user.png";

const LoginPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(changeCurrentRegister(data));
    navigation.navigate("Otp");
  };

  return (
    <AuthsLayout>
      <View style={authStyles.authForm}>
        <Box style={authStyles.title}>
          <Text style={authStyles.subTitle} fontSize="2xl" lineHeight={"md1"}>
            Đăng nhập
          </Text>
          <Text style={authStyles.bodyTitle} fontSize="md" lineHeight="xs">
            Xin chào, rất vui khi bạn đã quay lại
          </Text>
        </Box>
        <VStack style={authStyles.inputForm}>
          <Box style={authStyles.inputGroup}>
            <Box style={styles.arrowGroup}>
              <Text style={styles.textPhoneInput}>+84</Text>
              <Image source={downArrowIcon} style={styles.arrowIcon} />
            </Box>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[authStyles.input, styles.phoneInput]}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  keyboardType="phone-pad"
                  placeholder="Nhập số điện thoại"
                />
              )}
              name="phoneNumber"
              rules={{ required: true }}
            />
          </Box>
          <Button
            onPress={handleSubmit(onSubmit)}
            style={[
              authStyles.submitBtn,
              isValid ? authStyles.ableBtn : authStyles.disableBtn,
            ]}
            _text={authStyles.textBtn}
            disabled={!isValid}
          >
            Đăng nhập
          </Button>
        </VStack>
        <Text
          style={authStyles.authBottomTitle}
          fontSize="md"
          color="singletons.50"
        >
          Đăng nhập với{" "}
          <Text style={authStyles.authBottomTitleBold}>Azure AD</Text>
        </Text>
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
  textPhoneInput: {
    fontFamily: "Mulish-Regular",
    fontWeight: "bold",
    color: theme.colors.singletons[50],
    lineHeight: 23,
    fontSize: 18,
  },
  userIcon: {
    width: 24,
  },
  arrowIcon: {
    width: 13,
    marginLeft: 12,
  },
  fullNameInput: {
    paddingLeft: 11,
  },
  phoneInput: {
    paddingLeft: 23,
  },
});

export default LoginPage;
