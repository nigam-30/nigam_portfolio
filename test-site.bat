@echo off
title Nigam Mehta Portfolio - Local Server & Build Tester
color 0B
cls

:menu
echo ==========================================================
echo           Nigam Mehta Portfolio - Control Center          
echo ==========================================================
echo.
echo  [1] Start Next.js Dev Server (Auto-opens http://localhost:3000)
echo  [2] Run Clean Production Build (Clean & Rebuild Next.js)
echo  [3] Start Next.js Production Server (Builds & Serves)
echo  [4] Clean Cache (.next folder)
echo  [5] Exit
echo.
echo ==========================================================
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto prod
if "%choice%"=="4" goto clean
if "%choice%"=="5" goto exit

echo.
echo [Invalid Choice] Please select a number between 1 and 5.
echo.
pause
cls
goto menu

:dev
cls
echo ==========================================================
echo           Starting Next.js Development Server             
echo ==========================================================
echo.
if not exist node_modules (
    echo [INFO] node_modules folder missing. Installing dependencies first...
    call npm install
)
echo [INFO] Server starting... Browser will open in 3 seconds at http://localhost:3000
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"
echo [INFO] Launching dev server...
call npm run dev
cls
goto menu

:build
cls
echo ==========================================================
echo           Running Clean Production Build                  
echo ==========================================================
echo.
if not exist node_modules (
    echo [INFO] node_modules folder missing. Installing dependencies first...
    call npm install
)
if exist .next (
    echo [INFO] Cleaning old .next cache...
    rmdir /s /q .next
)
echo.
echo [INFO] Compiling Next.js pages...
call npm run build
if %errorlevel% equ 0 (
    echo.
    echo ==========================================================
    echo  [SUCCESS] Build compiled successfully with zero errors!
    echo ==========================================================
) else (
    echo.
    echo ==========================================================
    echo  [FAILURE] Build failed. Review compiler outputs above.
    echo ==========================================================
)
echo.
pause
cls
goto menu

:prod
cls
echo ==========================================================
echo           Starting Next.js Production Server              
echo ==========================================================
echo.
if not exist node_modules (
    echo [INFO] node_modules folder missing. Installing dependencies first...
    call npm install
)
echo [INFO] Ensuring fresh production build...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed. Cannot start production server.
    pause
    goto menu
)
echo.
echo [INFO] Server starting... Browser will open in 3 seconds at http://localhost:3000
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"
echo [INFO] Launching production server...
call npm run start
cls
goto menu

:clean
cls
echo ==========================================================
echo                 Cleaning Cache                            
echo ==========================================================
echo.
if exist .next (
    echo [INFO] Removing .next directory...
    rmdir /s /q .next
    echo [SUCCESS] .next cache cleared successfully!
) else (
    echo [INFO] No .next directory found. Cache is already clean.
)
echo.
pause
cls
goto menu

:exit
echo.
echo Goodbye!
echo.
timeout /t 2 >nul
exit /b 0
