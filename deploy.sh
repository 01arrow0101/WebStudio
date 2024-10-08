#!/usr/bin/env sh

# прерываем выполнение при наличии ошибок
set -e

# сборка
npm run build

# переходим в директорию со сборкой
cd dist

# если используем кастомный домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:[01arrow0101]/[01arrow0101].github.io.git main

cd -