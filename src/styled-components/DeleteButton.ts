import styled from 'styled-components';
import { Button } from './Button';
import { Colors } from './global/variables';

export const DeleteButton = styled(Button)`
    width: 80px;
    height: 25px;
    padding: 0;

    color: ${Colors.violet};
    font-size: 12px;
    line-height: 25px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.75px;
    text-transform: uppercase;

    border: 1px solid ${Colors.black};
`;
