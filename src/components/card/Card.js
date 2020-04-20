import React from 'react';
import {
  Container,
  ImageContainer,
  Image,
  Title,
  Content,
} from './Card.styles';

export default function Card({ title, content, image, href }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}
