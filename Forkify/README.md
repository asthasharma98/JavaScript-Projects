# Forkify 

The Forkify Recipe application allows user to search for various different recipes using the [Forkify API](https://forkify-api.herokuapp.com/v2) and deployed on [Netlify](https://www.netlify.com/). Users can view the recipe along with the cook time and also update the amount of servings they need for different number of people.
Also as a user we can save the recipe and create our own recipe so that we can have them organized in the same app.
Favorite meals are stored in local storage so no database was required for this application.

**To view and try the deployed Application, click on the link given below:** [https://forkify-web-application.netlify.app/](https://forkify-web-application.netlify.app/)

### How to run the code and Installations

#### Prerequisites 

Before getting started with this project make sure that you have the latest version of `Node.js` installed in your local machine.
Here is the link from where you can download and install Node - [https://nodejs.org/en/](https://nodejs.org/en/)

Start with the latest version of NPM to avoid any errors:

```
npm install npm@latest -g
```

#### Installation 

- Get a free API key at [Forkify API_KEY](https://forkify-api.herokuapp.com/v2)
- To clone the repository 
```
https://github.com/asthasharma98/JavaScript-Projects.git
```
- Enter your API in `config.js`
```
const KEY = 'ENTER YOUR API';
```
- Deployment code is located in *"Public folder"*.
- To launch development code download zip file on your computer. Extract it into the empty folder. Then open npm to install all dependencies. Inside project's directory type:
'''
npm init
'''
```
npm run start 
```

#### Purpose of the project was to learn

- How to Setup a entire workflow using *Node.js* and *npm*. Its core dependencies allowed me to optimize my code and not to worry about the server side of my project.
- Worked with AJAX and implemented API calls using *fetch* to send promises to the recipes server and fetching data.
- tried new feature called `local storage`. It helps to store favourite recipes list information throughout multiple sessions locally in user's browser. 
- got to know about the `MVC` architecture.
- covered latest feature of JS and As many old browsers do not support ES6 JavaScript using `parcel`.

#### Tools and Technologies used

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [SCSS](https://sass-lang.com/)
- [Node.Js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [JS ES6](https://www.w3schools.com/js/js_es6.asp)
- [Parcel](https://parceljs.org/)



