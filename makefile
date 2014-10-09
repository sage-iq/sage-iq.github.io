SHELL := /bin/bash

deploy:
	scp -r _site/* ubuntu@ojas.net:/opt/sage-iq

deploy2:
	scp -r _site/* paprika.cloudapp.net:/opt/sage-iq
