#!/bin/bash

rm -rf /dist
ng build --prod
gzip -vrk dist/gartrell-app
scp -r dist/gartrell-app/ root@deveye-main:/var/www/