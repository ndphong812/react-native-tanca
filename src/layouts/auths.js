import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Box } from "native-base";
import { theme } from "utils/css";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "assets/images/background/background-1.png";
import closeIcon from "assets/icons/close.png";
import downArrowIcon from "assets/icons/down-arrow.png";
import vnIcon from "assets/icons/vn.png";

const AuthsLayout = ({ children }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Box style={styles.registerActions}>
          <TouchableOpacity
            style={styles.closeAction}
            onPress={() => navigation.goBack()}
          >
            <Image source={closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageAction}>
            <Image width={11} source={downArrowIcon} />
            <Image width={22} height={22} source={vnIcon} />
          </TouchableOpacity>
        </Box>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.muted[50],
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-between",
  },
  registerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  closeAction: {
    paddingHorizontal: 20,
  },
  languageAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
  languageOptions: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  languageChild: {
    flex: 1,
    width: "100%",
  },
  languageTitle: {
    color: theme.colors.muted[200],
    fontSize: 18,
  },
  title: {
    marginBottom: 20,
  },
  registerTitle: {
    fontFamily: "Mulish-Regular",
    fontWeight: theme.fontWeights["bold"],
    color: theme.colors.singletons[50],
    marginBottom: 13,
  },
  registerSubTitle: {
    fontFamily: "Mulish-Regular",
    fontWeight: theme.fontWeights["normal"],
    color: theme.colors.muted[200],
  },
  inputForm: {
    display: "flex",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: theme.colors.muted[300],
    paddingHorizontal: 15,
    marginTop: 20,
  },
  fullNameInputGroup: {},
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
  input: {
    flex: 1,
    borderWidth: 0,
  },
  fullNameInput: {
    paddingLeft: 11,
  },
  phoneInput: {
    paddingLeft: 23,
  },
  submitBtn: {
    backgroundColor: theme.colors.primary[50],
    borderRadius: 15,
    marginTop: 29,
    paddingTop: 15,
    paddingBottom: 15,
  },
  disableBtn: {
    opacity: 0.6,
  },
  textBtn: {
    fontFamily: "Mulish-Regular",
    fontWeight: theme.fontWeights["medium"],
    fontSize: 20,
  },
});

export default AuthsLayout;
