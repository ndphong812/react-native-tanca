import { StyleSheet } from "react-native";
import { View, Text, Button, Box } from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useRef, useState } from "react";
import IntroItem from "./IntroItem";
import { SLIDER_WIDTH, ITEM_WIDTH, WHITE, theme } from "utils/css";
import { introDatas } from "utils/data";
import { useNavigation } from "@react-navigation/native";
import { authStyles } from "styles/auths";

const IntroPage = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={7}
        ref={isCarousel}
        data={introDatas}
        renderItem={IntroItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={false}
      />
      <View style={styles.pagination}>
        <Pagination
          dotsLength={introDatas.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inActiveDot}
          inactiveDotScale={1}
          tappableDots={true}
        />
      </View>
      <Box style={styles.auths}>
        <Box style={styles.buttonContainer}>
          <Button
            style={styles.buttonItem}
            onPress={() => navigation.navigate("Login")}
            variant="outline"
            borderColor="primary.50"
            _text={styles.leftButton}
          >
            Login
          </Button>
          <Button
            style={styles.buttonItem}
            onPress={() => navigation.navigate("Register")}
            variant="solid"
            bg="primary.50"
            _text={styles.rightButton}
          >
            Join Now
          </Button>
        </Box>
        <Text
          style={authStyles.authBottomTitle}
          fontSize="md"
          color="singletons.50"
        >
          Sign in with{" "}
          <Text style={authStyles.authBottomTitleBold}>Azure AD</Text>
        </Text>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 41,
  },
  pagination: {
    marginBottom: 45,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: -4,
    backgroundColor: theme.colors.primary[50],
  },
  inActiveDot: {
    backgroundColor: theme.colors.muted[100],
  },
  auths: {
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 17,
  },
  buttonItem: {
    width: "47%",
    borderRadius: 14,
    paddingTop: 15,
    paddingBottom: 15,
  },
  leftButton: {
    color: theme.colors.primary[50],
    fontSize: "lg",
    lineHeight: "md",
  },
  rightButton: {
    fontSize: "lg",
    lineHeight: "md",
  },
});

export default IntroPage;
