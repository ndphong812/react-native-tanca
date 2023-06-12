import { StyleSheet } from "react-native";
import { theme } from "utils/css";
export const authStyles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: "Mulish-Regular",
    fontWeight: theme.fontWeights["bold"],
    color: theme.colors.singletons[50],
    marginBottom: 13,
  },
  bodyTitle: {
    fontFamily: "Mulish-Regular",
    fontWeight: theme.fontWeights["normal"],
    color: theme.colors.muted[200],
  },
  authForm: {
    width: "100%",
    paddingTop: 29,
    paddingBottom: 19,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.muted[50],
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  inputForm: {
    display: "flex",
    marginBottom: 17,
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
  input: {
    flex: 1,
    borderWidth: 0,
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
  otpsTextInput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
    fontFamily: "Mulish-Regular",
    color: theme.colors.singletons[50],
    lineHeight: 22,
    fontSize: 20,
    backgroundColor: theme.colors.muted[300],
  },
  authBottomTitle: {
    textAlign: "center",
    lineHeight: 22,
  },
  authBottomTitleBold: {
    fontWeight: "bold",
    lineHeight: 22,
  },
});
