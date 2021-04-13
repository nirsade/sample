import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #055933;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const FooterContainer = styled.div`
    background-color: #a7d9db;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const AbsoluteOpacity = styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    right: 0;
    ${props => props.top ? 
        'top: 80px; background: linear-gradient(rgba(241, 224, 173,1), rgba(241, 224, 173,0));' :
         'bottom: 40px; background: linear-gradient(rgba(241, 224, 173,0), rgba(241, 224, 173,1));'}
`;

export { HeaderContainer, FooterContainer, AbsoluteOpacity }