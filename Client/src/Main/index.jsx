import React, { Fragment } from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import {FlexContainer, FlexSidebar, FlexMain, FlexContent} from "./Styles"
import { Route } from 'react-router-dom';
import styled from 'styled-components';

export const TestComp = styled.div`
    background-color: yellow;
    height: 100%;
`;

const MainPage = () => (
  <FlexContainer>

    <Header />

    <FlexMain>

      <FlexSidebar>
        <Sidebar />
      </FlexSidebar>

      <FlexContent>
        <Route path='/' render={ () => (
            <Fragment>
               <h1>Test asfsdafsad</h1>
               toto je nejaky text
            </Fragment>
            )
          }>
        </Route>
      </FlexContent>

    </FlexMain>

  </FlexContainer>
);


export default MainPage;