import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Meteo from './components/Meteo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Meteo city="Luneville" zipcode="54300" countrycode="fr"/>
        <Meteo city="Nancy" zipcode="54000" countrycode="fr" />
        <Meteo city="Toulouse" zipcode="31000" countrycode="fr" />
        <Meteo city="Le Lamentin" zipcode="97232" countrycode="mq"/>
        <Meteo zipcode="07086" city="Weehawken" countrycode="US" />
    </React.StrictMode>
);
