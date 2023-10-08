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