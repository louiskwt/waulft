from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route("/")
def main():
    today = datetime.datetime.now()
    until = datetime.datetime(2024, 2, 9, 14)
    diff = (until - today).seconds
    diff_hour = diff / 3600
    diff_day = 0 if diff_hour < 24 else diff_hour * 24

    return render_template('index.html', time_unit=diff_day, time_left=diff)