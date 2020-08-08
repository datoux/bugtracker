import React from 'react';
import PropTypes from 'prop-types';
import {StyledSidebar, Section, SectionTitle, LinkItem, LinkText, LinkCount } from "./Styles"
import { NavLink, useRouteMatch } from 'react-router-dom';


const Sidebar = () => {
    const match = useRouteMatch();

    return (
        <StyledSidebar>

           <Section> 
               <SectionTitle> QUEUES </SectionTitle>
               {renderLinkItem(match, 'Pending Tickets', 13, '/')}
               {renderLinkItem(match, 'All Tickets', 1, '/all')}
               {renderLinkItem(match, 'My Tickets', 0, '/my')}
               {renderLinkItem(match, 'Unresponed', 0, '/unresponed')}
            </Section> 

           <Section> 
               <SectionTitle> STATUSES </SectionTitle>
               {renderLinkItem(match, 'Open', null, '/open')}
               {renderLinkItem(match, 'Solved', null, '/solved')}
               {renderLinkItem(match, 'Closed', null, '/closed')}
            </Section> 

           <Section> 
               <SectionTitle> CATEGORIES </SectionTitle>
               {renderLinkItem(match, 'Pixet', null, '/category/1')}
               {renderLinkItem(match, 'Hardware', null, '/category/2')}
               {renderLinkItem(match, 'Electronics', null, '/category/3')}
            </Section> 

        </StyledSidebar>
    );
}

const renderLinkItem = (match, text, count, path) => {
    return (
      <LinkItem as={NavLink} exact={true} to={`${path}`} >
        <LinkText> {text} </LinkText>
        {count != null &&
            <LinkCount> {count} </LinkCount>
        }
      </LinkItem>
    );
  };


export default Sidebar;