import { View, StyleSheet, Image } from "react-native";
import { Text } from "native-base";
import { ITEM_WIDTH, theme } from "utils/css";

const IntroItem = ({ item, index }) => {
  return (
    <View style={styles.item} key={index}>
      <View style={styles.container}>
        <Image source={item.imgUrl} style={styles.image} />
        <Text style={styles.title} fontSize="2xl" lineHeight="lg">
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    paddingLeft: 33,
    paddingRight: 33,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 22,
  },
  image: {
    width: "100%",
    marginBottom: 65,
  },
  title: {
    fontFamily: "Mulish-Regular",
    fontWeight: 600,
    textAlign: "center",
    color: theme.colors.singletons[50],
  },
});

export default IntroItem;
