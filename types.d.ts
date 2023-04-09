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

type FourDayForecast = {
  "cod": string,
  "message": number,
  "cnt": numbernumber
  "list": HourlyForecast[]
}

type HourlyForecast = {
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

type Units = 'F' | 'C' | 'K'

interface FetchArgs {
  city: string,
  state?: string,
  country?: string,
  limit?: number,
}

interface FetchWUnits extends FetchArgs {
  units: Units
}