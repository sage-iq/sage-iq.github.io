SHELL := /bin/bash

deploy:
	scp -r _site/* ubuntu@ojas.net:/opt/sage-iq

deploy-staging:
	rsync -avz _site/* ssh azureuser@sage-iq-playpen.cloudapp.net:/opt/www/staging-sage-iq.com
#	scp -r _site/* azureuser@sage-iq-playpen.cloudapp.net:/opt/www/staging-sage-iq.com
