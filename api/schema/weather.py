class WeatherReport():
    def __init__(self, day, city, lat, lon, temperature_daily_min, temperature_daily_max, rel_humidity_daily_avg, max_temperature, min_temperature, max_rel_humidity, min_rel_humidity):
        self.city = city
        self.lat = lat
        self.lon = lon
        self.day = day
        self.temperature_daily_min = temperature_daily_min
        self.temperature_daily_max = temperature_daily_max
        self.rel_humidity_daily_avg = rel_humidity_daily_avg
        self.max_temperature = max_temperature
        self.min_temperature = min_temperature
        self.max_rel_humidity = max_rel_humidity
        self.min_rel_humidity = min_rel_humidity

    def getInfo(self):
        return self.__dict__
