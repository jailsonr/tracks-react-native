import React from "react";
import styled from "styled-components";

const Card = props => {
  return (
    <Container>
      <Cover>
        {/* {true ? <Image source={require("")} /> : null} */}
        <Image source={require("../../assets/20200112_131225.jpg")} />
        {/* <Title>Paseo en barco por el lago</Title> */}
      </Cover>
      <Content>
        <Wrapper>
          <Caption>Paseo en barco</Caption>
          <Subtitle>
            Navegar por el lago Villa Rica con guía licenciado
          </Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Content = styled.View`
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 4px;
`;

const Wrapper = styled.View``;

const Container = styled.View`
  background: white;
  width: 250px;
  height: 350px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: orange;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

export default Card;
