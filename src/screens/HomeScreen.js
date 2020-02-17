import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import ExcursionForm from "../components/ExcursionForm";
import PreSearchCard from "../components/PreSearchCard";
import { SearchBar } from "react-native-elements";
import { Icon } from "expo";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Gambiarra />
      <SearchBar
        inputStyle={{ backgroundColor: "white", paddingBottom: 6 }}
        style={{ paddingBottom: 0 }}
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
          elevation: 5,
          height: 50
        }}
        placeholder='Try "Trekking"'
        leftIconContainerStyle={{
          backgroundColor: "white",
          paddingBottom: 3
        }}
        inputContainerStyle={{
          backgroundColor: "white"
        }}
      />
      <OtaGambiarra />
      <ScrollView>
        <ScrollView
          style={scrollViewStyle.style}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {filters.map((filter, index) => (
            <PreSearchCard key={index} text={filter.name} />
          ))}
        </ScrollView>
        <ExcursionForm
          seccionTitle="TRENDING NEAR YOU"
          cardType="regular"
          navigation={navigation}
        />
        <ExcursionForm
          seccionTitle="POPULAR EXCURSIONS IN PUCÓN"
          cardType="slim"
          navigation={navigation}
        />
      </ScrollView>
    </Container>
  );
};

HomeScreen.navigationOptions = {
  headerShown: false
};

//const styles = StyleSheet.create({});
const Container = styled.View`
  background-color: #f0f3f5;
`;

const Gambiarra = styled.View`
  width: 50%;
  margin-top: 10%;
  padding-left: 20px;
`;

const OtaGambiarra = styled.View`
  padding-bottom: 10px;
`;

const scrollViewStyle = StyleSheet.create({
  style: {
    flexDirection: "row",
    padding: 20,
    paddingLeft: 12
  }
});

export default HomeScreen;

const filters = [
  {
    name: "PaymentMenu Test"
  },
  {
    name: "Nature"
  },
  {
    name: "Sports"
  },
  {
    name: "Culture"
  },
  {
    name: "Adventure"
  }
];
