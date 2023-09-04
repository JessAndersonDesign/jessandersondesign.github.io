sass scss/styles.scss:css/styles.css
echo '' > js/scripts.min.js
cat js/jquery.min.js >> js/scripts.concat.js
cat js/t.min.js >> js/scripts.concat.js
cat js/scripts.js >> js/scripts.concat.js
cat js/portfolio.js >> js/scripts.concat.js
terser --compress --mangle -- js/scripts.concat.js >> js/scripts.min.js
