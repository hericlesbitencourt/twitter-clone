import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Hericles Bitencourt Rocha</h1>
        <h2>@hericlesbitencourt</h2>

        <p>
          Developer at <a href="/">@Company X</a>
          <ul>
            <li>
              <LocationIcon />
              Salvador, Bahia, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 1995
            </li>
          </ul>
        </p>

        <Followage>
          <span>
            seguindo <strong>93</strong>
          </span>
          <span>
            <strong>254</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
