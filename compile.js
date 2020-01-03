

const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('templates');


const pages = [
    'index',
    'otra',
];

pages.map(page => {

    console.log("Compilando pagina", page);
   
    const html = nunjucks.render(page + '.njk');

    fs.writeFileSync('dist/' + page + '.html', html);

});