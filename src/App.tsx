import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from 'components/NavBar/NavBar';
import { Routes } from 'constants/routes';
import Main from 'components/Main/Main';
import History from 'components/History/History';
import { useDispatch } from 'react-redux';
import { Container } from './styles/styled-components/Container';
import { setImages } from './store/history/actions';

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!window.indexedDB) {
            window.alert('Ваш браузер не поддерживат стабильную версию IndexedDB. Такие-то функции будут недоступны');
        }

        const openRequest = indexedDB.open('history');

        openRequest.onsuccess = () => {
            const db = openRequest.result;

            db.onversionchange = () => {
                db.close();
                alert('База данных устарела, пожалуста, перезагрузите страницу.');
            };

            // ...база данных доступна как объект db...
        };

        const history = localStorage.getItem('history');
        if (history) {
            const { images } = JSON.parse(history);
            if (images) {
                dispatch(setImages(images));
            }
        }
    }, []);

    return (
        <Router>
            <Container>
                <NavBar />
                <Route exact path={Routes.ROOT} component={Main} />
                <Route exact path={Routes.HISTORY} component={History} />
            </Container>
        </Router>
    );
};

export default App;
