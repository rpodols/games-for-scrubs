# Tech Blog - Challenge 14

## Description
This project is the fourteenth challenge of the coding bootcamp.

User Story: As a developer who writes about tech, I want a CMS-style blog site, so that I can publish articles, blog posts, and my thoughts and opinions. 

Starting from scratch, this challenge required writing  code to do the following:
*   GIVEN a CMS-style blog site

        -WHEN I visit the site for the first time
        -THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

        -WHEN I click on the homepage option
        -THEN I am taken to the homepage

        -WHEN I click on any other links in the navigation
        -THEN I am prompted to either sign up or sign in

        -WHEN I choose to sign up
        -THEN I am prompted to create a username and password

        -WHEN I click on the sign-up button
        -THEN my user credentials are saved and I am logged into the site

        -WHEN I revisit the site at a later time and choose to sign in
        -THEN I am prompted to enter my username and password

        -WHEN I am signed in to the site
        -THEN I see navigation links for the homepage, the dashboard, and the option to log out

        -WHEN I click on the homepage option in the navigation
        -THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

        -WHEN I click on an existing blog post
        -THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

        -WHEN I enter a comment and click on the submit button while signed in
        -THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

        -WHEN I click on the dashboard option in the navigation
        -THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

        -WHEN I click on the button to add a new blog post
        -THEN I am prompted to enter both a title and contents for my blog post

        -WHEN I click on the button to create a new blog post
        -THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

        -WHEN I click on one of my existing posts in the dashboard
        -THEN I am able to delete or update my post and taken back to an updated dashboard

        -WHEN I click on the logout option in the navigation
        -THEN I am signed out of the site

        -WHEN I am idle on the site for more than a set time
        -THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

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
* to run this locally, clone the repository from GitHub, and run the command 'npm i' while in the project directory.  create an .env file in the root directory of this project, entering your mysql username, password, and db the data will reside in.  if sql database does not yet exist, additionally in the terminal enter the command 'mysql -u root -p', and then enter the mysql password, and run source db/schema.sql.  if your mysql username is not root, please substitute your username in that command.  once the database exists, quit mysql, and run 'npm start' in the command line to start the server.  insomnia can then be used to test the routes.

## Usage
* this can be used as a spot to blog about tech and comment on other people's blog posts.

## Contributing
* no outside contributions at this time

## License
* MIT License

[Click here for more license info!](https://choosealicense.com/licenses/mit/)

## Tests
* tests can be run by using Insomnia, and testing different get, post, put, and delete commands once the server is running.  otherise, can visit the live link and test it in the heroku environment.

## Questions
* any questions, please feel free to reach out via email to rdpodols@gmail.com

## Link to Project & Screenshot
![total-tech-blog Screenshot)](/assets/images/applicationImage1.png)
[Click here to view the project!](https://limitless-springs-36362.herokuapp.com/)


