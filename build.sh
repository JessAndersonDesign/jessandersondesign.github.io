compass compile -e production --force
echo '' > js/scripts.concat.js
cat js/jquery.min.js >> js/scripts.concat.js
cat js/t.min.js >> js/scripts.concat.js
cat js/scripts.js >> js/scripts.concat.js
cat js/portfolio.js >> js/scripts.concat.js
uglifyjs -v -c -m --screw-ie8 js/scripts.concat.js -o js/scripts.min.js
