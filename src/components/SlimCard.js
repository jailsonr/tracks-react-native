import React from "react";
import styled from "styled-components";

const SlimCard = props => {
  return (
    <Container>
      <Cover>
        {/* {true ? <Image source={require("")} /> : null} */}
        <Image source={props.imageCover} />
        {/* <Title>Paseo en barco por el lago</Title> */}
      </Cover>
      <Content>
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
      </Content>
      <SpamContainer>
        <BackgroundColorSpam>
          <Spam>{props.schedule}</Spam>
        </BackgroundColorSpam>
        <BackgroundColorSpam>
          <Spam>{props.rating}</Spam>
        </BackgroundColorSpam>
      </SpamContainer>
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
  font-size: 13px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 4px;
`;

const Wrapper = styled.View``;

const SpamContainer = styled.View`
  padding-top: 13px;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 10px;
`;

const BackgroundColorSpam = styled.View`
  background-color: #b8bece;
  margin-right: 5px;
  border-radius: 4px;
`;

const Container = styled.View`
  background: white;
  width: 190px;
  height: 320px;
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

const Spam = styled.Text`
  color: white;
  font-size: 14px;

  margin-left: 5px;
  margin-right: 5px;
`;

export default SlimCard;
