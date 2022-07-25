import PropTypes from 'prop-types';
import './style.scss';
import {useEffect, useState} from "react";
import axios from "axios";

function Meteo({city, zipcode, countrycode}) {
    const [temperature, setTemperature] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTemp = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}&appid=dbb26eee436c3f9212215aef4339d66f&units=metric`);

            setTemperature(response.data.main.temp);
            setLoading(false);
        };
        fetchTemp();
    }, []);
    return (
        <article className="meteo">
            <h2 className="meteo-title">Météo à {city}</h2>
            <p className="meteo-code">{zipcode}</p>
            {!loading && <p className="meteo-temp">{temperature}°C</p>}
        </article>
    );
}

Meteo.propTypes = {
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    countrycode: PropTypes.string.isRequired,
}
export default Meteo;
