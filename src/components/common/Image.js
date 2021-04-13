import { space, height } from 'styled-system';
import styled from 'styled-components';

export default styled.img`
    font-size: 8px;

    ${space}
    ${height}
    ${props => props.rounded && 'border-radius: 50%;'}
`