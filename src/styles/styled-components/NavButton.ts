import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavButton = styled(NavLink)`
    display: inline-block;
    height: 36px;
    padding: 0 16px;

    color: #656268;
    font-size: 20px;
    font-weight: 500;
    line-height: 36px;
    vertical-align: middle;

    border-radius: 4px;

    &.active {
        color: var(--violet);

        background-color: var(--gray);
    }

    &:hover {
        color: var(--violet);
    }
`;
