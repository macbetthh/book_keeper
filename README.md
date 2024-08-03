# Book Keeper -- Google Books Search App
This is a full-stack application that allows users to search for books using the Google Books API and save their favorite books. The application is built with the MERN stack (MongoDB, Express, React, Node.js) and Apollo Client for GraphQL.

## Features
User authentication (signup, login, logout)
Search for books using the Google Books API
Save books to a personal list
View saved books
Remove books from the saved list


## Installation
1. Clone the repository:

`git clone https://github.com/your-username/google-books-search-app.git`
`cd google-books-search-app`

2. Install dependencies:

For the server:

`cd server`
`npm install`

For the client:

`cd client`
`npm install`

3. Set up environment variables:

Create a .env file in the server directory and add the following:

`MONGODB_URI=your-mongodb-uri`
`JWT_SECRET=your-jwt-secret`

## Usage
1. Run the development server:

In the root directory of the project, run:

`npm run develop`
This will start both the client and server concurrently.

2. Build the client for production:

`cd client`
`npm run build`

## License
This project is licensed under the MIT License.

## Credits
-Dev: Me
-[Starter code](https://github.com/coding-boot-camp/solid-broccoli)