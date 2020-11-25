import styled from 'styled-components';
import { Button } from './Button';
import { Colors } from './global/variables';

export const UploadButton = styled(Button)`
    position: relative;

    display: block;
    height: 48px;
    margin: 24px auto 0;
    padding-left: 50px;

    color: ${Colors.white};
    font-weight: 500;
    font-size: 20px;

    background-color: ${Colors.violet};
    border: none;

    &::before {
        content: '';
        position: absolute;

        right: calc(100% - 40px);

        display: block;

        width: 24px;
        height: 24px;

        background-image: url(./upload.svg);
    }

    &:disabled {
        background-color: ${Colors.gray};

        cursor: not-allowed;
    }
`;
