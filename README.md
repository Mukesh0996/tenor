# Tenor Clone App - ReactJS [Live APP](https://mukesh0996.github.io/tenor/)


ReactJS app built by using [Tenor](https://tenor.com/en-GB/) and by using [Tenor APIs](https://tenor.com/gifapi/documentation#quickstart)

## Available Components

[`Carousel`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/Carousel) - Used it as a wrapping component to create a carousel effect for the Trending Gifs.

[`FeaturedGifs`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/FeaturedGifs) - Used this component to show the top 20 featured GIFs with infinite scrolling. When the scroll reaches the component's end, it sends a new HTTP request to the Tenor server to load 20 more GIFs into the UI. This was achieved by incorporating the `IntersectionObserver API` into the component.

[`Gif`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/Gif/) - Used to render Gifs' in the entire application. Used this component across multiple components in the app. 

[`Header`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/Header) - Component represents the header section of this application.

[`Loading`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/Loading) - Component to represent the loading state in the application, when awaiting response for the sent HTTP request to the Tenor server.

[`Searchbar`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/Searchbar) - Represents the searchbar of the app, where user can key-in characters to search the Gifs.

[`SearchResults`]() - Component used to show the Gifs fetched from the Tenor sever upon searching for Gifs. Components consists of a backdrop UI and is build using [`ReactDOM.CreatePortal`](https://react.dev/reference/react-dom/createPortal).

[`Trending`]() - Used this component for displaying the trending GIfs in the app. Implemented [`Carousel`](https://github.com/Mukesh0996/tenor/tree/main/src/Components/Carousel) effect in this component.

-----


### `Available Custom Hooks`

[`useFetch`](https://github.com/Mukesh0996/tenor/blob/main/src/Hooks/useFetch.js) - This Custom Hook makes HTTP requests to the Tenor server and delivers the response to the relevant component. It accepts the API URL as the first argument and optionally appends query parameters to the Tenor API URL as the second argument. This Hook also manages the app-wide loading state.


---
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
