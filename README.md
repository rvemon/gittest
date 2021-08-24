# Git Commits On Project (Commit on Test Branch)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

The goal of this project is to create an app that can show commit history on the main page you are working.

To do so, I create a project using Angular and a main page that includes a component (at the bottom) that shows the previous commits, the author of this commits and the comment made at the moment the commit was created, all this grouped by branch.

This component can be used in any other pages to get the same result.

## Prerequisites
NodeJs and Angular installed.

## Build

To run this project you need to clone it first.
Then, using a terminal inside /gittest you need to run the following commands:

  npm install (to install the dependencies /node-modules folder)
  
  ng serve (to run the project)
  

## End-to-end tests
This project needs you to specify your username to show your commits

you can easily do this going to gittest/src/assets/jsonconfig.json.

this file have the structure:
{
    "name": "rvemon"
}

where "name" is your username, by default it contains my username.

To see the project you need to go to localhost:[port] in a browser, the [port] is shown in the terminal after you run "ng serve"

example: localhost:4200

Finally to see the changes you need to refresh the page after a commit is done.

## Further help

You can contact me to get help on how to run the proyect or for any other observation. 
