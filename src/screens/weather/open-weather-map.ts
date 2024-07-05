const WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

export type ForecastResult = {
  main: string;
  description: string;
  temp: number;
};

export const fetchForecast = async (zip: string): Promise<ForecastResult> => {
  try {
    const url = `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
    const response = await fetch(url);
    const resJson = await response.json();

    if (response.status !== 200) {
      throw new Error(resJson.message);
    }

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
