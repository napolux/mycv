# MyCV with Contentful [![Build Status](https://travis-ci.org/napolux/mycv.svg?branch=master)](https://travis-ci.org/napolux/mycv)

Here are some details about the MyCV project, available on Heroku too: [https://mycv-francesco-napoletano.herokuapp.com/](https://mycv-francesco-napoletano.herokuapp.com/)

#### Credentials for Admin area:

* Username: `admin`
* Password: `admin`

### Details about the app:

* Content is retrieved from [Contentful](https://contentful.com)
* Email is not sent for real
* The admin area doesn't save/delete data from/to contentful but methods `handleDelete()` and `handleSubmit()` are in place
* Please consider that while it works with the given credentials and it's able to protect from direct access to the `/admin` page, **authentication is not safe and doesn't persist user session** (if you access the page directly you'll be redirected to the login form). It's managed at router level for simplicity.
* Tests are run on [Travis CI](https://travis-ci.org/github/napolux/mycv)
* Tests are [snapshot tests](https://jestjs.io/docs/en/snapshot-testing), with mock data for components 

### Used libraries / frameworks

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* For routing I used [React Router](https://github.com/ReactTraining/react-router)
* For UI elements I used [Semantic UI React](https://react.semantic-ui.com) for both its simplicity and its semantic & responsive markup output

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
