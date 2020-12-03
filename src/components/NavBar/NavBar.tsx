import React, { FC } from 'react';
import { NavButton } from '../../styled-components/NavButton';
import { MainNav } from '../../styled-components/MainNav';

const NavBar: FC = (): JSX.Element => {
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
