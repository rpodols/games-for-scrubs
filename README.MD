# Tech Blog - Challenge 14

## Description
This project is the fourteenth challenge of the coding bootcamp.

User Story: As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies, so that my company can compete with other e-commerce companies.

Starting from minimal starter code, this challenge required writing additional code to do the following:
*   GIVEN a functional Express.js API

        -WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
        -THEN I am able to connect to a database using Sequelize

        -WHEN I enter schema and seed commands
        -THEN a development database is created and is seeded with test data

        -WHEN I enter the command to invoke the application
        -THEN my server is started and the Sequelize models are synced to the MySQL database

        -WHEN I open API GET routes in Insomnia for categories, products, or tags
        -THEN the data for each of these routes is displayed in a formatted JSON

        -WHEN I test API POST, PUT, and DELETE routes in Insomnia
        -THEN I am able to successfully create, update, and delete data in my database

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Made Using:
* Node.js

## Installation
* to install, clone the repository from GitHub, and run the command 'npm i' while in the project directory.  create an .env file in the root directory of this project, entering your mysql username, password, and db the data will reside in.  if sql database does not yet exist, additionally in the terminal enter the command 'mysql -u root -p', and then enter the mysql password, and run source db/schema.sql.  if your mysql username is not root, please substitute your username in that command.  once the database exists, quit mysql, and run 'npm run seed' in the command line to seed the database.  once seeded, run 'npm start' in the command line to start the server.  insomnia can then be used to test the routes.

## Usage
* this can be used as an e-commerce back-end, for educational and learning purposes.

## Contributing
* no outside contributions at this time

## License
* MIT License

[Click here for more license info!](https://choosealicense.com/licenses/mit/)

## Tests
* tests can be run by using Insomnia, and testing different get, post, put, and delete commands once the server is running.

## Questions
* any questions, please feel free to reach out via email to rdpodols@gmail.com

## Link to Project & Screenshot
![E-commerece-back-end Screenshot)](/assets/images/applicationImage1.png)
[Click here to view the project!](https://rpodols.github.io/e-commerce-back-end/)

## Walkthrough Video
* video walkthrough to show full capabilities of app:
    - Click here: https://drive.google.com/file/d/1JXs1ZBtAvwgXrNvm0vPTPg7YuOgYaIzt/view
