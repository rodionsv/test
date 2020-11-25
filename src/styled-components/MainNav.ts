import styled from 'styled-components';
import { cardShadow, Colors } from './global/variables';

export const MainNav = styled.nav`
    width: 100%;
    padding: 8px 65px;
    margin-top: 70px;

    background: ${Colors.white};
    border-radius: 2px;
    box-shadow: ${cardShadow};

    li {
        display: inline-block;
        margin-right: 36px;

        &:last-child {
            margin: 0;
        }
    }
`;
