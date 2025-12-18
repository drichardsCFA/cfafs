@echo off
echo This will upload your site via FTP
echo.
echo You'll need your FTP credentials from cPanel
echo.
pause

ftp -s:ftp-commands.txt
