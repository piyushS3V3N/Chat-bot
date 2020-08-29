
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, request, jsonify
from flask_cors import CORS
import main

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello from Flask! This is a test site'


@app.route('/query-test')
def query_example():
    return 'Query Successful'


@app.route('/Bot-response-function', methods=["Post"])
def jsonexample():
    req_data = request.get_json()
    bot_response = "Custom Response"
    user_input = req_data["user-input"]

    bot_response = main.start(user_input)

    return jsonify({
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": {
            "user-input": user_input,
            "response": bot_response
        }
    })


app.run()
