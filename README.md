
# DevFest 2022 Website Template

Are you looking for a website template for your GDG DevFest 2022? Feel free to use this one!

This website was made with React and Tailwind CSS. The primary font is Google Sans (included). We followed the brand color guidelines recommended by GDG and all of our graphics are from the GDG DevFest brand guidelines.

We used Netlify for hosting because it is easy and free. If you also use Netlify, make sure to use the  _redirects file in the public folder with the following line: '/* /index.html 200' (no quotes). If you delete this file, your page links will break and you will be sad!

We are managing our speakers through Sessionize https://sessionize.com/. Sessionize has an API to pull in your speaker bios and speaker sessions. This is how we pull in the data for the speakers. We have not yet included a feature to pull in the sessions or schedule data, but we will. Make a pull request if you want to add this feature!  

## How to Clone This Project

1. Open your terminal and type $ git clone {the url of this repo}
2. cd into the new folder and type $ npm install
3. Run the React project from your terminal with $ npm start
   

## React Dependencies

The following React dependencies/tools were also used to make this website:

React Router: https://reactrouter.com/en/main/getting-started/installation

React Icons: https://react-icons.github.io/react-icons/

React Burger Menu: https://negomi.github.io/react-burger-menu/ 

React Modal (for Speaker Bios): http://reactcommunity.org/react-modal/


## Meta Tags and Schema Structured Data
Do you want your website link to look great when you share on social media? Make sure to edit the meta tags on the index.html! Note: This is only setup to work for sharing your main website link, not subpage links. Important: Make sure to replace the images with YOUR OWN DEVFEST IMAGES and follow recommended image size guidelines for Twitter and Open Graph. Learn more: https://ogp.me/. PS Canva is your friend for making quick graphics. 

Do you want Google to pick up your site as an event? Make sure to edit the Event Schema section in the index.html! Note: This is not guaranteed to work. But maybe? Learn more: https://developers.google.com/search/docs/advanced/structured-data/event


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
