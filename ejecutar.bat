@echo off
echo Instalando dependencias...
pip install -r requirements.txt
echo.
echo Iniciando servidor...
python server.py
pause 