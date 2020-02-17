import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import styled from "styled-components";
import Carousel, { Pagination } from "react-native-snap-carousel";

const BackgroundCarousel = props => {
  const [activeSlide, setActiveSlide] = useState(0);

  let state = {
    selectedIndex: 0
  };

  const { images } = props;
  const { selectedIndex } = state;
  console.log("passou aqui");
  console.log(images);

  const mode = "cover";
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        contentContainerStyle={{}}
        data={images}
        onSnapToItem={index => setActiveSlide(index)}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.slide}>
              <View style={styles.slideInnerContainer}>
                <Image
                  key={item}
                  source={{ uri: item }}
                  style={styles.backgroundImage}
                />
              </View>
            </View>
          );
        }}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
      />

      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          top: 300
        }}
        containerStyle={{
          position: "absolute"
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const styles = StyleSheet.create({
  pagination: {
    position: "absolute",
    top: 100
  },
  container: {
    backgroundColor: "gray",
    height: "100%",
    width: "100%"
  },
  backgroundImage: {
    height: "100%",
    width: "100%"
  },
  slide: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 0
    // other styles for the item container
  },
  slideInnerContainer: {
    width: "100%",
    height: "100%",
    flex: 1
    // other styles for the inner container
  }
});

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export default BackgroundCarousel;

// const Image = styled.Image`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;
