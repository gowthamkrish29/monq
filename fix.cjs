const fs = require('fs');
let text = fs.readFileSync('src/data/products.js', 'utf8');
text = text.replace(/image: "\//g, 'image: import.meta.env.BASE_URL + "');
fs.writeFileSync('src/data/products.js', text);
