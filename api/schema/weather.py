class WeatherReport():
    def __init__(self, day, day_obs, city, lat, lon, temperature_daily_min, temperature_daily_max, rel_humidity_daily_avg, max_temperature, min_temperature, max_rel_humidity, min_rel_humidity, mean_rel_humidity, precipitation_daily_acu, precipitation_daily_max, precipitation_daily_min, metaWeather):
        self.city = city
        self.lat = lat
        self.lon = lon
        self.day = day
        self.day_obs = day_obs
        self.temperature_daily_min = temperature_daily_min
        self.temperature_daily_max = temperature_daily_max
        self.rel_humidity_daily_avg = rel_humidity_daily_avg
        self.max_temperature = max_temperature
        self.min_temperature = min_temperature
        self.max_rel_humidity = max_rel_humidity
        self.min_rel_humidity = min_rel_humidity
        self.mean_rel_humidity = mean_rel_humidity
        self.precipitation_daily_acu = precipitation_daily_acu
        self.precipitation_daily_max = precipitation_daily_max
        self.precipitation_daily_min = precipitation_daily_min
        self.metaWeather = metaWeather

    def getInfo(self):
        return self.__dict__

#precipitation_daily_acu
#precipitation_daily_max
#precipitation_daily_min