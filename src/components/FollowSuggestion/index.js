/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar, Container, FollowButton, Info } from './styles'

function FollowSuggestion({name, nickname}) {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
        <FollowButton outlined>Seguir</FollowButton>
    </Container>
  )
}

export default FollowSuggestion
