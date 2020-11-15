import styled from 'styled-components';
import { Button } from './Button';

export const UploadButton = styled(Button)`
    position: relative;

    display: block;
    height: 48px;
    margin: 24px auto 0;
    padding-left: 50px;

    color: var(--white);
    font-weight: 500;
    font-size: 20px;

    background-color: var(--violet);
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
        background-color: var(--gray);

        cursor: not-allowed;
    }
`;
