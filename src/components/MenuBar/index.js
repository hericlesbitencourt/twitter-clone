import React from 'react';
import Button from '../Button';
import { Avatar, BellIcon, Botside, Container, EmailIcon, ExitIcon, FavoriteIcon, HomeIcon, Logo, MenuButton, ProfileData, ProfileIcon, Topside } from './styles';

const MenuBar = () => (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Hericles Bitencourt Rocha</strong>
          <span>@hericlesbitencourt</span>
        </ProfileData>
        
        <ExitIcon />
      </Botside>
    </Container>
  )

export default MenuBar