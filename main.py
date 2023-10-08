from flask import Flask, render_template, jsonify
import requests
import json
from Data import Data


app = Flask(__name__)

@app.route("/")
def index():
    water_bodies = Data.getWaterBodiesCoords2()
    with open('static/water_bodies.json', 'w') as f:
        json.dump(water_bodies, f)
    return render_template("index.html")

@app.route("/get_water_bodies")
def get_water_bodies():
    water_bodies = Data.getWaterBodiesCoords2() 
    return jsonify(water_bodies)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)
