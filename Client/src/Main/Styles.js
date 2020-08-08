import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;
`;

export const FlexFooter = styled.footer`
    height: 50px;
`;

export const FlexHeader = styled.header`
    height: 50px;
`;

export const FlexMain = styled.div`
    display: flex;
    flex: 1 1 auto;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const FlexSidebar = styled.div`
    display: none;

    @media (min-width: 768px) {
        order: -1;
        display: block;
    }
`;

export const FlexContent = styled.div`
    flex: 1 1 auto;
    padding: 10px;
`;
