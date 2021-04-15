#!/bin/bash

rm -rf /dist
ng build --prod --aot --build-optimizer
gzip -vrk dist/gartrell-app
scp -r dist/gartrell-app/ admgartrell@gartrell-server:/var/www/gartrell/