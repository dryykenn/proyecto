@echo off
set "PAGE=%~dp0index.html"
set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" start "" "%CHROME%" "%PAGE%" & exit /b
set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" start "" "%CHROME%" "%PAGE%" & exit /b
set "CHROME=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" start "" "%CHROME%" "%PAGE%" & exit /b
start "" "%PAGE%"
