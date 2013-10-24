# Sage IQ Site

Build

    jekyll build -w

    jekyll serve

Deploy

    scp -r _site/* ubuntu@ojas.net:/opt/sage-iq

or

    rsync -avz _site/* ssh ubuntu@ojas.net:/opt/sage-iq
