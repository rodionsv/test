import styled from 'styled-components';
import { Button } from './Button';
import { Colors } from './global/variables';

export const ShowMoreButton = styled(Button)`
    display: block;
    height: 48px;
    margin: 24px auto 0;

    color: ${Colors.white};
    font-weight: 500;
    font-size: 20px;

    background-color: ${Colors.violet};
    border: none;
`;
