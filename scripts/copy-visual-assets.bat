@echo off
set DEST=d:\graphic-designer-website\public\services\visual-design
if not exist "%DEST%" mkdir "%DEST%"
copy /Y "C:\Users\LOQ\Downloads\17512950-uhd_3840_2160_25fps.mp4" "%DEST%\explore-01.mp4"
copy /Y "C:\Users\LOQ\Downloads\Video Project 1.mp4" "%DEST%\visual-project-1.mp4"
copy /Y "C:\Users\LOQ\Downloads\Video Project 3.mp4" "%DEST%\visual-project-3.mp4"
for %%F in ("C:\Users\LOQ\.cursor\projects\d-graphic-designer-website\assets\*c1fc5e4c*") do copy /Y "%%F" "%DEST%\social-scroll-mockup.png"
dir "%DEST%"
