import React from 'react'
import ProfilePage from '../ProfilePage';
import { BackIcon, BellIcon, BottomMenu, Container, EmailIcon, Header, HomeIcon, ProfileInfo, SearchIcon } from './styles'

function Main() {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Hericles Bitencourt Rocha</strong>
          <span>783 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />  
      </BottomMenu>
    </Container>
  );
}

export default Main;
