/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable keyword-spacing */
/* eslint-disable import/order */

import React from 'react';
import Footer from '../../Footer';
import Menu from '../../Menu';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 0%;
    padding-right: 0%;
`;

function PageDefault({ children }) {
  return(
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
