import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import BP_Mail_Banner from '../assets/BP_Mail_Banner.png';

const Styles = styled.div`
  .jumbo {
    background: url(${BP_Mail_Banner}) no-repeat;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Howdy</h1>
        <p>I'm trying to do the Test_Project</p>
      </Container>
    </Jumbo>
  </Styles>
)
