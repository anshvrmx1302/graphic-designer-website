@echo off
cd /d "%~dp0"
echo Starting Next.js dev server...
start "Next.js Dev" cmd /k "npm run dev"
echo Waiting for http://localhost:3000 ...
timeout /t 8 /nobreak >nul
start http://localhost:3000
echo Opened browser. Keep the "Next.js Dev" window running while you preview.
