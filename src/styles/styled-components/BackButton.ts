import styled from 'styled-components';
import { NavButton } from './NavButton';

export const BackButton = styled(NavButton)`
    position: relative;

    display: inline-block;
    margin-bottom: 20px;
    padding: 0 16px;
    padding-left: 50px;

    color: #656268;
    vertical-align: middle;

    background-color: grey;
    border-radius: 4px;

    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 10px);
        right: calc(100% - 30px);

        display: block;

        width: 20px;
        height: 20px;

        background-position: center center;
        background-image: url(./arrow-back.svg);
    }
`;
