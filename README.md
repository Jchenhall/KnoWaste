# Knowaste webapp
_nology Aruba's React webapp for the Knowaste project!.\
Public channel: https://knowaste-3c92c.web.app/

## Installation
In your terminal
````
git clone https://github.com/nology-tech/knowaste.git
````
Use 
````
npm install
```` 
in the root directory to install the dependencies

## Testing
[Jest](https://jestjs.io/) is used to run unit testing, it will pick up any files named `*.test.js` or `*.spec.js`. Babel is configured to translate from ES6 modules to commonJS so they can be run by Jest.

Functions can be exported and imported into the `spec` files for testing. Once tests are written, `npm run test` can be used to run locally.

GH Actions have been configured to run automated tests on any action involving a `pull_request` deployment will be stopped if tests are failing.


## Linting
[ESlint](https://eslint.org/) is used to assist us in writing better code. We are using the default recommended settings supplied by ESlint with a small override to downgrade an error to a warning. The list of rules that are enforced can be viewed [here](https://eslint.org/docs/rules/).

Rules can be modified by adding the rule name to the rules attribute on the `.eslintrc` file.

You can run `npm run lint` to run ESlint and report any errors/warnings on any of the `.js` or `.jsx` files in the project.

Linting will run on any `pull_request` action and prevent deployment if failed.

The ESlint extension can be added to VSCode to highlight any errors in the editor without having to run `npm run lint`



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
