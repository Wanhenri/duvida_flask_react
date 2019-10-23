from schema.weather import WeatherReport


class SomarController:
    def get_weather(self, date: str, data: dict, dataob: dict) -> (float, float, float):
        indexes = [i for i, d in enumerate(data['days']) if d.startswith(date)]

        if indexes == []:
            raise ValueError(f"There is no weather info on {date}")

        weather_reports = []

        index = indexes[0]
        temps_forecast = data['points']['forecast']
        temps_observed = dataob['points']['observed']
        config = data['points']['location']

        day = str(date)
        #day = data['days'][index]
        city = config['ref']
        lat = config['latitude']
        lon = config['longitude']

        temperature_daily_min = str(
            temps_forecast['temperature_daily_min'][index])
        temperature_daily_max = str(
            temps_forecast['temperature_daily_max'][index])
        rel_humidity_daily_avg = str(
            temps_forecast['rel_humidity_daily_avg'][index])

        max_temperature = str(temps_observed['max_temperature'][index])
        min_temperature = str(temps_observed['min_temperature'][index])
        max_rel_humidity = str(temps_observed['max_rel_humidity'][index])
        min_rel_humidity = str(temps_observed['min_rel_humidity'][index])

        weather_report = WeatherReport(day, city, lat, lon, temperature_daily_min, temperature_daily_max,
                                       rel_humidity_daily_avg, max_temperature, min_temperature, max_rel_humidity, min_rel_humidity)

        return weather_report.getInfo()