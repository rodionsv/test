import styled from 'styled-components';

export const Skeleton = styled.div`
    position: relative;

    display: block;

    background-color: #dddbdd;

    overflow: hidden;

    &::after {
        content: '';

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
        );

        transform: translateX(-100%);
        animation: shimmer 5s infinite;
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
`;
