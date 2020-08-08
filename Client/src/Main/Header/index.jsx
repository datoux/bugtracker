import React, {Fragment} from 'react';
import { Header, Title, HeaderIcon } from './Styles';
import { Icon } from 'shared/components'


const PageHeader = () => (
  <Header>
      <HeaderIcon>
        <Icon type="bars" />
      </HeaderIcon>
      <Title>Bug Tracker </Title>
  </Header>
);


export default PageHeader;
