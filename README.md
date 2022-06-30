## IMAGE PROCESSING API PROJECT

- this project uses the external sharp library to resize images via url parameters
- it is my first backend project written in typescript and part of my udacity web development course

# how to launch the project

- run npm install
- run npm start

- type into the address bar:
  http://localhost:3000/api/images?filename=the-persistance-of-memory&width=500&height=800
- or
  http://localhost:3000/api/images?filename=sahara-desert&width=300&height=300

- you can choose a width and height
- image files included in the project are 'the-persistance-of-memory' and 'sahara-desert'
- you can add your own jpg-images to the folder 'images/full' to resize them as well
- resized images are saved in 'images/thumb' and shown in the browser

# scripts

- npm install => install all dependencies
- npm start => start the local server
- npm run build => transpile typescript to javascript
- npm run javascript => run javascript (start the local server)
- npm run test => run the tests
