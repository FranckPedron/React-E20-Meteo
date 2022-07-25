import PropTypes from 'prop-types';
import './style.scss';
import {useEffect, useState} from "react";
import axios from "axios";

function Meteo({city, zipcode, countrycode}) {
    const [temperature, setTemperature] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // if (process.env.NODE_ENV === 'production') {
        const fetchTemp = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);

            setTemperature(response.data.main.temp);
            setLoading(false);
        };
        fetchTemp();
        // }
        // else {
        //     setTemperature(20);
        //     setLoading(false);
        // }

    }, [zipcode, countrycode]);
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
