import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import styled from "styled-components";
import Card from "./Card";
import SlimCard from "./SlimCard";
import navLink from "../components/NavLink";

const ExcursionForm = (props, { seccionTitle, cardType }) => {
  // console.log(props.cardType);
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Subtitle>{props.seccionTitle}</Subtitle>

          {props.cardType == "regular" ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={regularCards}
              keyExtractor={regularCard => regularCard.caption}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("ExcursionDetail", {
                        excursionDetail: item
                      })
                    }
                  >
                    <Card
                      caption={item.caption}
                      subtitle={item.subtitle}
                      rating={item.rating}
                      schedule={item.schedule}
                      imageCover={item.imageCover}
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity>
                    <SlimCard
                      caption={item.caption}
                      subtitle={item.subtitle}
                      rating={item.rating}
                      schedule={item.schedule}
                      imageCover={item.imageCover}
                    />
                  </TouchableOpacity>
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
    category: "Nature",
    schedule: "Full Day",
    imageCover: require("../../assets/20200112_131225.jpg"),
    images: [
      require("../../assets/20190715_105249.jpg"),
      require("../../assets/caburgua/20190714_122737.jpg"),
      require("../../assets/caburgua/20190714_122740.jpg"),
      require("../../assets/caburgua/20190714_122747.jpg"),
      require("../../assets/caburgua/20190715_105222.jpg"),
      require("../../assets/caburgua/20190715_105228.jpg")
    ]
  },
  {
    caption: "Agencia Chanchos",
    subtitle: "Lago Caburgua",
    rating: "4.7",
    category: "Nature",
    schedule: "Full Day",
    imageCover: require("../../assets/20190715_105249.jpg"),
    images: [
      "https://images.unsplash.com/photo-1570106178002-deb401f6e4fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1572376327504-ec7a94756e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1492485215466-dae7198c66c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    ]
  }
];

const slimCards = [
  {
    caption: "Los Pratt",
    subtitle: "Camine por Pucón escuchando su história",
    rating: "4.0",
    category: "Nature",
    schedule: "Half Day",
    imageCover: require("../../assets/20200112_121322.jpg"),
    images: [
      "../../assets/20190715_105249.jpg",
      "../../assets/caburgua/20190714_122737.jpg",
      "../../assets/caburgua/20190714_122740.jpg",
      "../../assets/caburgua/20190714_122747.jpg",
      "../../assets/caburgua/20190715_105222.jpg",
      "../../assets/caburgua/20190715_105228.jpg"
    ]
  },
  {
    caption: "Agencia Selknam",
    subtitle: "Conozca la magnitud del volcán Villa Rica de cerca",
    rating: "4.5",
    category: "Nature",
    schedule: "Half Day",
    imageCover: require("../../assets/20200111_115634.jpg"),
    images: [
      "../../assets/20190715_105249.jpg",
      "../../assets/caburgua/20190714_122737.jpg",
      "../../assets/caburgua/20190714_122740.jpg",
      "../../assets/caburgua/20190714_122747.jpg",
      "../../assets/caburgua/20190715_105222.jpg",
      "../../assets/caburgua/20190715_105228.jpg"
    ]
  }
];
