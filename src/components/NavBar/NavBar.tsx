import React, { FC } from 'react';
import { NavButton } from '../../styles/styled-components/NavButton';
import { MainNav } from '../../styles/styled-components/MainNav';

const NavBar: FC = () => {
    return (
        <MainNav>
            <ul>
                <li>
                    <NavButton exact activeClassName="active" to="/">
                        Главная
                    </NavButton>
                </li>
                <li>
                    <NavButton activeClassName="active" to="/history">
                        История
                    </NavButton>
                </li>
            </ul>
        </MainNav>
    );
};

export default NavBar;
