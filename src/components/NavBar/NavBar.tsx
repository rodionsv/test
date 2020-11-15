import React, { FC } from 'react';
import { NavButton } from '../styles/styled-components/NavButton';
import { MainNav } from '../styles/styled-components/MainNav';

const NavBar: FC = () => {
    return (
        <MainNav>
            <ul>
                <NavButton to="/">Главная</NavButton>
                <NavButton to="/history">История</NavButton>
            </ul>
        </MainNav>
    );
};

export default NavBar;
