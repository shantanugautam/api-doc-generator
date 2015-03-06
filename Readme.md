# API Documentation Generator
This web app is to help you generate your own api documentation portal.

Built on angular its meant to expedite the process of creation of a API documentation portal with access controls , Marketing messages and auto generated lists based on JSON exported from your code comments

# What you get 
- Dynamic deplaned routing for your API methods / Errors / resources
- Static Marketing Page
- Authentication  (coming soon)
- Contact form (coming soon)

# Requirements
## Development
To view the application in your development environment here are the requirements 

- *npm* : to manage the packages and dependencies required for build tasks
- *bower* : to manage the libraries required in the project
- *Firebase* (coming soon) : to manage the admin section and handle Auth and data collection

## Prodution
To run the application in production you will require the following

- Web server able to serve static assets
- *Firebase* (coming soon) : to manage the admin section and handle Auth and data collection.

# Getting started
Clone the repository on your machines. Navigate to the repository root and type

	npm install
	
Wait for npm to complete its magic. To initialise the application on your dev environment simple run

	gulp serve
	
This should open your default browser which will be currently showing the home page.

Copy your generated JSON's inside `<repository roo>t/src/<folder name>`.

Your documentation should be automatically generated.

# Deployment
Run 

	gulp build

It will give you package that you can upload to your web server.

# Configurations
Handled via constants defined on index.js

# TO DOs
- Migrate to rectangular to clean up the current hacky implementation of `$http.get`
- Implement authentication , to force signup before exposing your valuable APIs
- Finish implementing contact form
- Implement a configuration to ask for additional information on Signup.
- Lite CMS to manage content on marketing and contact pages
- Migrate configuration to a standalone file.


	