import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import BackgroundCarousel from "../components/BackgroundCarousel";

const ExcursionDetailScreen = props => {
  const { navigation } = props;

  const excursion = navigation.getParam("excursionDetail");

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        {/* <Image source={excursion.imageCover}></Image> */}
        <BackgroundCarousel images={excursion.images} />
      </Cover>
      <TouchableOpacity
        style={{ position: "absolute", top: 20, left: 20 }}
        onPress={() => navigation.goBack()}
      >
        {/* <Icon.Ionicons name="ios-close" size={36} color="#4775f2" /> */}
        {/* <Ionicons name="ios-arrow-round-back" size={32} /> */}
        <EvilIcons name="arrow-left" size={36} style={{ color: "white" }} />
      </TouchableOpacity>
      <DetailContent>
        <CategoryCaption>{excursion.category}</CategoryCaption>
        <Title>{excursion.subtitle}</Title>
      </DetailContent>
    </Container>
  );
};

ExcursionDetailScreen.navigationOptions = {
  title: "Excursion",
  headerShown: false
};

ExcursionDetailScreen.componentDidMount = () => {
  StatusBar.setBarStyle("light-content", true);
};

ExcursionDetailScreen.componentWillUnmount = () => {
  StatusBar.setBarStyle("dark-content", true);
};

const Container = styled.View`
  flex: 1;
`;

export default ExcursionDetailScreen;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text``;

const CategoryCaption = styled.Text`
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;
`;

const DetailContent = styled.View`
  margin-top: 10px;
`;

const Caption = styled.Text``;

const CloseView = styled.View`
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
