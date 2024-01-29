from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

counter = 0
@app.route('/increment', methods=['POST'])
def increment():
    global counter
    counter += 1
    return jsonify(counter=counter)

@app.route('/decrement', methods=['POST'])
def decrement():
    global counter
    counter -= 1
    return jsonify(counter=counter)

@app.route('/reset', methods=['POST'])
def reset():
    global counter
    counter = 0
    return jsonify(counter=counter)

@app.route('/get_counter', methods=['GET'])
def get_counter():
    return jsonify(counter=counter)
if __name__ == '__main__':
    app.run(debug=True)
