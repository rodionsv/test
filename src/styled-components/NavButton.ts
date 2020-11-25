import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from './global/variables';

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
        color: ${Colors.violet};

        background-color: ${Colors.gray};
    }

    &:hover {
        color: ${Colors.violet};
    }
`;
