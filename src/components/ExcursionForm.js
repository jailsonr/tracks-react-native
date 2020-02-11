import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import Card from "./Card";
import { SearchBar } from "react-native-elements";

const ExcursionForm = ({ seccionTitle }) => {
  return (
    <>
      <SearchBar
        inputStyle={{ backgroundColor: "white" }}
        containerStyle={{
          width: 350,
          paddingLeft: 20,
          backgroundColor: "white",
          borderRadius: 15,
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderBottomWidth: 0,
          borderTopWidth: 0,
          elevation: 5
        }}
        placeholder='Try "Trekking"'
        leftIconContainerStyle={{
          backgroundColor: "white"
        }}
        inputContainerStyle={{
          backgroundColor: "white"
        }}
      />
      <Subtitle>{seccionTitle}</Subtitle>
      <Card />
    </>
  );
};

const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

export default ExcursionForm;
