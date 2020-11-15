import styled from 'styled-components';

export const MainNav = styled.nav`
    width: 100%;
    padding: 8px 65px;
    margin-top: 70px;

    background: var(--white);
    border-radius: 2px;
    box-shadow: var(--card-shadow);

    li {
        display: inline-block;
        margin-right: 36px;

        &:last-child {
            margin: 0;
        }
    }
`;
