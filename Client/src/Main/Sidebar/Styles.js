import styled from 'styled-components';
import {font, color} from 'shared/utils/styles'

export const StyledSidebar = styled.div`
  height: 100%;
  width: 220px;
  background: #5e5e5e;
  padding-top: 1px;
  // padding: 10px;
  ${font.regular};
`;

export const Section = styled.div`
  // padding: 10px 12px;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const SectionTitle = styled.div`
  color: #c6c6c7;
  margin-left: 15px;
  margin-bottom: 15px;
  ${font.size(16)};
  ${font.sansBold};
`;

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 8px 30px;
  border-radius: 0px 4px 4px 0px;
  width: 90%;
  color: ${color.textLight};
  ${font.sansBold};

  &:hover {
     color: white;
     background: #888888; 
  }

  i {
    margin-right: 15px;
    font-size: 20px;
  }

  &.active {
    color: white;
    background: #51a3cc;
    i {
      color: ${color.primary};
    }
  }
`;

export const LinkText = styled.div`
  padding-top: 0px;
  ${font.size(14.7)};
`;

export const LinkCount = styled.div`

  ${font.size(14.7)};
`;

