from flask import Flask, render_template, jsonify
import requests
from Data import Data
        

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_water_bodies")
def get_water_bodies():
    water_bodies = Data.getWaterBodiesCoords3() 
    return jsonify(water_bodies)

if __name__ == "__main__":
    app.run(debug=True)
