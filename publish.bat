CALL npm run clean_win
CALL tsc
CALL copy package.json dist
CALL copy  README.md dist
CALL copy .\src\stepper_line\stepper-line.css .\dist\src\stepper_line\stepper-line.css
CALL npm publish ./dist --registry http://151.248.114.248:5000/
