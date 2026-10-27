import { Text, View } from 'react-native';
import { useState, useEffect} from 'react';

import NavBar from '../components/NavBar';
import LinkBar from '../components/LinkBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const weather = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        getWeatherAPI();
    }, [])

    const getWeatherAPI = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min');
            const json = await response.json();

            console.log(json);
            setWeatherData(json);
        } catch (err) {
            console.error("PRINTING Error: " + err)
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <SafeAreaView>
            <LinkBar />
            <Text>Weather</Text>
        </SafeAreaView>
    );
}

export default weather;