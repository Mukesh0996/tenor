# Tenor Clone App - ReactJS 


ReactJS app built by using [Tenor](https://tenor.com/en-GB/) and by using [Tenor APIs](https://tenor.com/gifapi/documentation#quickstart)  [Live App](https://mukesh0996.github.io/tenor/)

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