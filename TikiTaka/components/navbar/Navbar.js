import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const Nav = styled.View`
  height: 70px;
  background-color: blue;
`;

const Button = styled.Button``;

const Icon = styled.View``;

const Img = styled.Image``;
function Navbar() {
  return (
    <Nav>
      <Button title="CREATE"></Button>
      <Button title="INBOX"></Button>
      <Icon>
        <Img></Img>
      </Icon>
    </Nav>
  );
}

export default Navbar;
const styles = StyleSheet.create({});
