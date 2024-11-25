from flask import Flask, render_template, request, jsonify
import pandas as pd
from flask_cors import CORS

import streamlit as st

app = Flask(__name__)
CORS(app)

# Menu navigation
@app.route('/')
def home():
    return render_template('main.html')

@app.route('/w214_menu')
def w214_menu():
    return render_template('w214_menu.html')

@app.route('/c254_menu')
def c254_menu():
    return render_template('c254_menu.html')

@app.route('/v177_menu')
def v177_menu():
    return render_template('v177_menu.html')

# Variant navigation
@app.route('/w214_variant')
def w214_variant():
    return render_template('w214_variant.html')

# Load your Excel data
file_path = r"C:\Users\ssyedam\Desktop\(C214 W_V ) - (08_24)  - Summarized.csv.xlsx"

# File Handling
try:
    df = pd.read_excel(file_path)
except FileNotFoundError:
    df = pd.DataFrame()  # Create an empty DataFrame if file not found
    print(f"File not found: {file_path}")

@app.route('/get_data', methods=['POST'])
def get_data():
    try:
        # Retrieve columns and rows from the request
        columns = request.json.get('columns')
        rows = request.json.get('rows')

        # Ensure columns and rows are provided
        if columns is None or rows is None:
            return jsonify({"error": "Columns and rows must be provided"}), 400

        # Ensure columns is a list
        if isinstance(columns, str):
            columns = [columns]

        # Filter the DataFrame
        filtered_df = df.loc[rows, columns]

        # Return the filtered data as JSON
        return jsonify(filtered_df.to_dict(orient='records'))
    except KeyError as e:
        return jsonify({"error": f"KeyError: {e}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/submit_data', methods=['POST'])
def submit_data():
    try:
        data = request.get_json()
        new_row = {
            'ProcessNumber': data.get('ProcessNumber'),
            'ProcessName': data.get('ProcessName'),
            'ReleasedStatus': data.get('ReleasedStatus'),
            'Station': data.get('Station'),
            'Line': data.get('Line')
        }
        global df
        df = df.append(new_row, ignore_index=True)

        # Save the updated DataFrame to the Excel file
        df.to_excel(file_path, index=False)

        return jsonify({'message': 'Data submitted successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
