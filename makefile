SHELL := /bin/bash

deploy:
	scp -r _site/* ubuntu@ojas.net:/opt/sage-iq

deploy-staging:
	scp -r _site/* azureuser@sage-iq-playpen.cloudapp.net:/opt/www/sage-iq.com
