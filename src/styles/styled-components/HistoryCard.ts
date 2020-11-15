import styled from 'styled-components';

export const HistoryCard = styled.article`
    display: flex;

    margin-bottom: 16px;

    background: var(--white);
    border-radius: 2px;
    box-shadow: var(--card-shadow);

    img {
        margin-right: 50px;

        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }

    .skeleton {
        margin-right: 50px;
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
    }

    time {
        font-size: 14px;
        line-height: 20px;
    }
`;
