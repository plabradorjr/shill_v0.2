## This is a Flatiron School Project
# React, Redux, and Rails API

Front end is using React, Redux, and fetching Coingecko API and Localhost API.

Backend is Rails for proving API, storing user submitted data, and user authentication

# Installation

You will need to run two separate servers, one for front-end and one for back-end.

## Backend

After checking out the repo, cd into backend_shill and run `bundle install` to install dependencies.

run `rails db:migrate`

then `rails s -p 3030` to run the rails backend api on `localhost://3030`

You should see JSON response with `status: success`

Next is to run the frontend application.

## Frontend

cd into frontend_shill and run `npm i` to install dependencies.

then `npm start` to start the server.

You are now ready to open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

# What is it?
This is an application where users can share tips on stock market. Only logged in users can submit comments.

## MIT License
The code is available as open source under the terms of the MIT License.

# Specs

- [x]  Use the `create-react-app`
- [x]  Have one HTML page to render react-redux application
- [x]  5 stateless components
- [x]  2 container components
- [x]  3 routes
- [x]  Must use `react-router` and proper RESTful routing
- [x]  Use Redux middleware to respond to and modify state change
- [x]  Use async actions and `redux-thunk` middleware to send data to and receive data from a server 
- [x]  Rails API should handle the data persistence with a database. You should be using `fetch()` within our actions to GET and POST data from your API.
- [x]  No jQuery methods
- [x]  Have minimal styling, like react-bootstrap
    - [x]  Good understanding of the react/redux state flow
    - [x]  Good understanding of state and props in React
    - [x]  Knowledge of async JS with Promises 