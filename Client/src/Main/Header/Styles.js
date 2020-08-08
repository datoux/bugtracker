import styled from 'styled-components';
import {font} from 'shared/utils/styles'

export const Header = styled.header`
  height: 50px;
  background-color: #3b3b3b;
  padding: 5px;
  // text-align: center;
  display: flex;
  flex-flow: row;
  font: ${font.regular}
`;

export const Title = styled.h2`
  margin-left: 10px;
  align-self: center;
  color: #fff;
`;

export const HeaderIcon = styled.div`
    display: block;
    margin-left: 5px;
    align-self: center;
    @media (min-width: 768px) {
        display: none;
    }
    i {
      color: white;
        font-size: 22px;
    }
`;

