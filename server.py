from flask import Flask, send_from_directory
import webbrowser
import os

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    # Abrir el navegador automáticamente
    webbrowser.open('http://localhost:5000')
    # Iniciar el servidor
    print("Servidor iniciado en http://localhost:5000")
    print("Presiona Ctrl+C para detener el servidor")
    app.run(debug=True) 