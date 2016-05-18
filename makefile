SHELL := /bin/bash

run:
	jekyll serve

build-and-watch:
	jekyll build -w

clean:
	rm -rf _site

build:
	jekyll build

deploy: build
	scp -r _site/* ubuntu@ojas.net:/opt/sage-iq

deploy-staging: build
	rsync -avz _site/* ssh azureuser@sage-iq-playpen.cloudapp.net:/opt/www/staging-sage-iq.com
#	scp -r _site/* azureuser@sage-iq-playpen.cloudapp.net:/opt/www/staging-sage-iq.com
