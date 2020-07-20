# Apex Legends Tracker Comparison VS KingStevenNOS
This is an Apex Legends Stat tracker module Created For Gaming YouTuber KingStevenNOS for his website where his fans can compare their live stats to his.

## Tools
**Backend** - Express JS Server
**3rd Party API** - Tracker GG API Game Tracker
**Frontend** - Vue JS

## Get Started With The Tracker
##### Clone the Repository to your Space
Upon cloning the repository to your preferred directory, you may begin to take the following steps:

1. In your preferred terminal, change directory (CD) to your project file and run:

```git
npm install

```
2. You need to create your **.env** file and enable in with variables that have been shown in the **.env.example** file. The easiest way to do so will be the copy command (**cp**) that you can use in your terminal (mostly GIT Terminal)
```git
cp .env.example .env
```

3. This, i would assume you are using this application for personal reasons so therefore to change the main card to your own stats, change the URL in the **Tracker Component** inside *resources/js/components/* and you will be golden.

4. After that, run your compiler and then start yor server with the commands below and you are sorted.

```git

npm run dev

npm start

```


## After Project.
Some of you may feel like this is a small project to be documenting like this, and you may all be right.
I did this project with aims of learning about Vue without using the Vue CLI which crafts applications' skeletons for you so that you may not have to start from scratch. I have not used ES6 in this project and I have used a webpack wrapper that i felt most comfortable with. So below are all the packages that I used that made me be able to structure out this project in a combined total of 12 hours while learning about Vue JS:

### Backend 
- **express**  *For the Express Server.*
- **nodemon**  *To Start the server and restart every time I make changes to the server*
- **dotenv**   *To use the .env file as the main source of the environment configurations*
- **cross-env** *To change environment variable values as i run scripts within the package.json e.g. NODE_ENV from development to production.*
- **body-parser**  *To enable the data to be read from the serversid eto the frontend side*
- **morgan** *Logs changes in the project when in Development mode. i.e. **NODE_ENV=development***

### Frontend
- **vue** *Main attraction, the JavaScript frontend framework in play*
- **bootstrap** *CSS Framework for easy styling of the Application*
- **@fortawesome/fontawesome-free** *Package that contains Fontawesome 5 fonts and icons.*
- **jquery** *You know what this is for...*
- **sweetalert2** *Sending modal notifications from responses within the application upon making requests*
- **laravel-mix** *Webpack wrapper for compiling SASS into CSS and the raw JS into JS for production. On running it also installs **sass-loader**, **sass**, **resolve-url-loader** and the **vue-template-compiler** automatically for all your webpack needs*
- **vform** *For parsing form-data from vue into the server side*
- **axios** *For making HTTP requests to the server from Vue*


## Later Updates.
- Adding a request loader using Vuex state management for the entire systems. *Coming sooner than you think*
- Probably will change from using Bootstrap to using Tailwind CSS you may never know what's coming