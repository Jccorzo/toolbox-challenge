#README.md

Hi!

This project has two parts, backend and front.end, each one have your own method to run, but they can be run together as follows:

With: docker-compose up . 

each part going to build a container, and it will run at port 3000 for front-end and 3001 port for backend.

you could test the app accesing to http://localhost:3000/ and send de word throught the input.

You also could test the app throught postman, or some client to see de flag when de word is palindrome.

To run indivual, do the follow: 

## For Fron-End:
* first we need to install dependencies with npm install inside front folder
* npm start, for run as develop mode
* npm run build, for build improved to production
* npm test, for run unit test with jest
* docker build -t <image-name>, for build and image for the page

## For Back-End:
* first we need to install dependencies with npm install inside back folder
* npm run dev, for run as develop mode
* npm run test, for run a unit test (remember, up the server before launch the test) 
* npm run build, for production build (if fail, and you are in unix system, remember bring the permissions for execute scripts with "chmod +x ./build.sh")
* docker build -t <image-name>, for build and image for the api
* npx standard, to run standarJs 

In spec.yml you could see the swagger documentation for the api

