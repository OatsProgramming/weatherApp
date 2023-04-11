type CurrentWeather = {
  "coord": {
    "lon": number,
    "lat": number
  },
  "weather": [
    {
      "id": number,
      "main": string,
      "description": string,
      "icon": string
    }
  ],
  "base": string,
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number,
    "sea_level": number,
    "grnd_level": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number,
    "gust": number
  },
  "rain": {
    "1h": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}

type QuintWeeklyForecast = {
  "cod": string,
  "message": number,
  "cnt": number
  "list": ForecastObj[],
  "city": {
    "id": number,
    "name": string,
    "coord": {
      "lat": number
      "lon": number
    },
    "country": string,
    "population": number
    "timezone": number
    "sunrise": number
    "sunset": number
  }
}

type ForecastObj = {
    "dt": number,
    "main": {
      "temp": number,
      "feels_like": number,
      "temp_min": number,
      "temp_max": number,
      "pressure": number
      "sea_level": number
      "grnd_level": number
      "humidity": number
      "temp_kf": number
    },
    "weather": [
      {
        "id": number
        "main": string,
        "description": string,
        "icon": string
      }
    ],
    "clouds": {
      "all": number
    },
    "wind": {
      "speed": number
      "deg": number
      "gust": number
    },
    "visibility": number
    "pop": number
    "rain": {
      "1h": number
    },
    "sys": {
      "pod": string
    },
    "dt_txt": string
}

// In the api, it returns GeoCode[] not just a singular one
type GeoCode = {
    "name": string,
    "local_names": {
      "af": string,
      "ar": string,
      "ascii": string,
      "az": string,
      "bg": string,
      "ca": string,
      "da": string,
      "de": string,
      "el": string,
      "en": string,
      "eu": string,
      "fa": string,
      "feature_name": string,
      "fi": string,
      "fr": string,
      "gl": string,
      "he": string,
      "hi": string,
      "hr": string,
      "hu": string,
      "id": string,
      "it": string,
      "ja": string,
      "la": string,
      "lt": string,
      "mk": string,
      "nl": string,
      "no": string,
      "pl": string,
      "pt": string,
      "ro": string,
      "ru": string,
      "sk": string,
      "sl": string,
      "sr": string,
      "th": string,
      "tr": string,
      "vi": string,
      "zu": string
    },
    "lat": number,
    "lon": number,
    "country": string
}

type Units = 'imperial' | 'metric' | 'standard'

interface FetchGeoArgs {
  city: string,
  state?: string,
  country?: string,
  limit?: string,
}

interface FetchWeatherArgs {
  lat: number,
  lon: number,
  units: string
}

type DayMap = {
  [day: string]: {
      forecastObjects: TriHourlyForecast[];
      highest: number;
      lowest: number;
  };
}

interface IconProps {
  children?: React.ReactNode,
  size?: number,
  moveX?: number,
  moveY?: number,
  fillColor?: string,
  rotate?: number,
  style?: {[key: string]: any},
  initial?: {[key: string]: any},
  animate?: {[key: string]: any},
  exit?: {[key: string]: any},
  animateNow?: boolean | null,
}