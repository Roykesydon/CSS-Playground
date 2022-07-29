@REM npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Roykesydon/Test.git master:gh-pages