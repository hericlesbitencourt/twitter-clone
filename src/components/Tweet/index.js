import React from 'react';
import {
  Avatar,
  Body,
  CommentIcon,
  Container,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  Retweeted,
  RetweetIcon,
  Status,
} from './styles';

function Tweet() {
  return (
    <Container>
      <RetweetIcon small />
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rockeatseat</strong>
            <span>Rockeatseat</span>
            <Dot />
            <time>14 de mar</time>
          </Header>

          <Description>Pra cima deles!</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
