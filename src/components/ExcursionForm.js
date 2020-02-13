import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components";
import Card from "./Card";
import SlimCard from "./SlimCard";

const ExcursionForm = ({ seccionTitle, cardType }) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Subtitle>{seccionTitle}</Subtitle>

          {cardType == "regular" ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={regularCards}
              keyExtractor={regularCard => regularCard.caption}
              renderItem={({ item }) => {
                return (
                  <Card
                    caption={item.caption}
                    subtitle={item.subtitle}
                    rating={item.rating}
                    schedule={item.schedule}
                    imageCover={item.imageCover}
                  />
                );
              }}
            />
          ) : (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={slimCards}
              keyExtractor={slimCard => slimCard.caption}
              renderItem={({ item }) => {
                return (
                  <SlimCard
                    caption={item.caption}
                    subtitle={item.subtitle}
                    rating={item.rating}
                    schedule={item.schedule}
                    imageCover={item.imageCover}
                  />
                );
              }}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

export default ExcursionForm;

const regularCards = [
  {
    caption: "Agencia Bubus",
    subtitle: "Navega por el lago Villa Rica con guía licenciado",
    rating: "4.0",
    schedule: "Full Day",
    imageCover: require("../../assets/20200112_131225.jpg")
  },
  {
    caption: "Agencia Chanchos",
    subtitle: "Lago Caburgua",
    rating: "4.7",
    schedule: "Full Day",
    imageCover: require("../../assets/20190715_105249.jpg")
  }
];

const slimCards = [
  {
    caption: "Los Pratt",
    subtitle: "Camine por Pucón escuchando su história",
    rating: "4.0",
    schedule: "Half Day",
    imageCover: require("../../assets/20200112_121322.jpg")
  },
  {
    caption: "Agencia Selknam",
    subtitle: "Conozca la magnitud del volcán Villa Rica de cerca",
    rating: "4.5",
    schedule: "Half Day",
    imageCover: require("../../assets/20200111_115634.jpg")
  }
];
