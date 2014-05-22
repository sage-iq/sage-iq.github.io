build:
	jekyll build -w

serve:
	jekyll serve --port 4001

deploy:
	scp -r _site/* ubuntu@ojas.net:/opt/sage-iq
#	rsync -avz _site/* ssh ubuntu@ojas.net:/opt/sage-iq
