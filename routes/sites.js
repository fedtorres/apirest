const express = require('express');
const http = require('http');
const router = express.Router();

router.get('/', function(req,res, next) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.mercadolibre.com/sites', true);
    request.onload = function () {

        // Begin accessing JSON data here
        const data = JSON.parse(this.response);

        /*if (request.status >= 200 && request.status < 400) {
            data.forEach(site => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const h1 = document.createElement('h1');
                h1.textContent = site.name;

                const p = document.createElement('p');
                p.textContent = "ID: " + site.id;

                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "No funciona!";
            app.appendChild(errorMessage);
        }*/
        res.render('sites', { sites: data });
    }
});

module.exports = router;
