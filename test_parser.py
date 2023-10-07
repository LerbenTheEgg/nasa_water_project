import requests

def convert_to_decimal(coord):
    # Implement the conversion logic here
    # The following is a simplified example, adjust as needed
    degrees = float(coord[:2])
    minutes = float(coord[2:4])
    seconds = float(coord[4:])
    return degrees + minutes / 60 + seconds / 3600

base_url = "http://rajapinnat.ymparisto.fi"
endpoint = "/api/Hydrologiarajapinta/1.1/odata/Paikka"
query_params = {
    '$select': 'Nimi,KoordLat,KoordLong'
}

url = base_url + endpoint

response = requests.get(url, params=query_params)
data = response.json()

results = []
for item in data.get('value', []):
    name = item.get('Nimi')
    latitude = convert_to_decimal(item.get('KoordLat'))
    longitude = convert_to_decimal(item.get('KoordLong'))
    results.append({
        "name": name,
        "latitude": latitude,
        "longitude": longitude
    })

print(results)
