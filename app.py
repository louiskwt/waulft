from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route("/")
def main():
    today = datetime.date.today()
    until = datetime.date(2024, 2, 9)
    diff = (until - today).days
    return render_template('index.html', time_unit=diff)