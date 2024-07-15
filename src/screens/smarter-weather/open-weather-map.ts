const WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

export type ForecastResult = {
  main: string;
  description: string;
  temp: number;
};

const fetchForecast = async (url: string): Promise<ForecastResult> => {
  try {
    const response = await fetch(url);
    const resJson = await response.json();

    return {
      main: resJson.weather[0].main,
      description: resJson.weather[0].description,
      temp: resJson.main.temp,
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getZipUrl = (zip: string) =>
  `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;

const getLatLonUrl = (lat: number, lon: number) =>
  `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;

export const fetchZipForecast = async (zip: string) =>
  fetchForecast(getZipUrl(zip));

export const fetchLatLonForecast = async (lat: number, lon: number) =>
  fetchForecast(getLatLonUrl(lat, lon));
