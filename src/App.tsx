import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import { Routes } from 'constants/routes';
import Main from 'components/Main/Main';
import History from 'components/History/History';
import { useDispatch } from 'react-redux';
import { Container } from './styled-components/Container';
import { setImages } from './store/history/actions';
import { GlobalStyles } from './styled-components/global/GlobalStyles';
import { GlobalFonts } from './styled-components/global/GlobalFonts';

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const history = localStorage.getItem('history');
        if (history) {
            const { images } = JSON.parse(history);
            if (images) {
                dispatch(setImages(images));
            }
        }
    }, []);

    return (
        <>
            <GlobalStyles />
            <GlobalFonts />
            <Router>
                <Container>
                    <NavBar />
                    <Route exact path={Routes.ROOT} component={Main} />
                    <Route exact path={Routes.HISTORY} component={History} />
                </Container>
            </Router>
        </>
    );
};

export default App;
