#Download and install the latest version of Nodejs from 
#Clone the project into a local directory.
#Inside the root folder of the working directory install the required library by running the following commands from through the terminal:
> npm install @apollo-server graphql
>npm install nodemon

#This will install the graphQL and apollo-server (for backend development) which will provide the a platform for running queries on our api. Nodemon restarts the server automatically whenever we make a change to the code.

#Inside the root folder, create a new directory(client) to host the frontend modules of the project.
#From this new directory, run the following commands from the terminal. Take note of the dot(.) at the end of the first command. This will install a simple react app into our project.

>npx create-react-app .
>npm install @apollo-client

#Once everything is setup, run the following command from the terminal
>npm start

#Inside the client folder, in the app.js file, edit the following line of code to reflect the port from which the app is running as follows:
#This can be copied from the active terminal.
		'''
		uri: "http://localhost:3001/graphql"
		'''

#Now you're all set to add more features to the project as you would like.

#Happy Coding!