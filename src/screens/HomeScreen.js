import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import ExcursionForm from "../components/ExcursionForm";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <InputSearchBar />
      <ExcursionForm seccionTitle="TRENDING" />
    </Container>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

//const styles = StyleSheet.create({});
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const InputSearchBar = styled.View`
  width: 50%;
  margin-top: 10%;
  padding-left: 20px;
`;

export default HomeScreen;
