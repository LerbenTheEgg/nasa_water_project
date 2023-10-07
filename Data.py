import requests

class Data:
    
    @staticmethod
    def convert_to_decimal(coord):
        # Implement the conversion logic here
        # The following is a simplified example, adjust as needed
        # Ensure coord is in the correct format before conversion
        degrees = float(coord[:2])
        minutes = float(coord[2:4])
        seconds = float(coord[4:])
        return degrees + minutes / 60 + seconds / 3600

    @staticmethod
    def getWaterBodiesCoords():
        base_url = "http://rajapinnat.ymparisto.fi"
        endpoint = "/api/Hydrologiarajapinta/1.1/odata/Paikka"
        query_params = {
            '$select': 'Nimi,KoordLat,KoordLong'
        }

        url = base_url + endpoint

        response = requests.get(url, params=query_params)
        if response.status_code != 200:
            # Handle error (you may want to raise an exception or return an empty list)
            return []

        data = response.json()

        results = []
        for item in data.get('value', []):
            name = item.get('Nimi')
            latitude = Data.convert_to_decimal(item.get('KoordLat'))
            print(latitude)
            longitude = Data.convert_to_decimal(item.get('KoordLong'))
            results.append({
                "name": name,
                "latitude": latitude,
                "longitude": longitude
            })
        
        return results

    @staticmethod
    def getWaterBodiesCoords2():
        base_url = "http://rajapinnat.ymparisto.fi"
        endpoint = "/api/jarvirajapinta/1.0/odata/Jarvi"
        query_params = {
            '$select': 'Nimi,KoordErLat,KoordErLong'
        }

        url = base_url + endpoint

        response = requests.get(url, params=query_params)
        if response.status_code != 200:
            # Handle error (you may want to raise an exception or return an empty list)
            return []

        data = response.json()

        results = []
        for item in data.get('value', []):
            name = item.get('Nimi')
            latitude = item.get('KoordErLat')
            print("hdsfbui" + latitude)
            longitude = item.get('KoordErLong')
            results.append({
                "name": name,
                "latitude": latitude,
                "longitude": longitude
            })
        
        return results

    @staticmethod
    def getWaterBodiesCoords3():
        base_url = "http://rajapinnat.ymparisto.fi"
        endpoint = "/api/Kasviplanktonrajapinta/1.1/odata/AlgaBloomObservation"
        query_params = {
            '$select': 'Lake,CoordMK_Lat,CoordMK_Long'
        }

        url = base_url + endpoint

        response = requests.get(url, params=query_params)
        if response.status_code != 200:
            # Handle error (you may want to raise an exception or return an empty list)
            return []

        data = response.json()

        results = []
        for item in data.get('value', []):
            name = item.get('Lake')
            latitude = str(item.get('CoordMK_Lat')).replace(",",".")
            longitude = str(item.get('CoordMK_Long')).replace(",",".")
            results.append({
                "name": name,
                "latitude": latitude,
                "longitude": longitude
            })
        
        return results


Data.getWaterBodiesCoords3()