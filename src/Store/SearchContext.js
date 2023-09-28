import React, { useReducer } from "react";


export const AppContext = React.createContext({ 
                                                searchKey:"", 
                                                searchResults: [], 
                                                searchNum:"",
                                                previewGif:{},
                                                featuredGifs:[],
                                                stateDispatcher: ()=>{}
                                            });
    let initialState = {
        searchKey: "", 
        searchResults: [], 
        searchNum: "", 
        previewGif: {}, 
        featuredGifs : [], 
        stateDispatcher:() => {}
    };

const AppContextProvider = (props) => {

    function reducerFn (state, action) {
        let type = action.type;

       switch (type) {
            case 'SET_SEARCH_KEY':
                    return {
                        ...state,
                        searchKey: action.value
                    };
            case 'RESET_SEARCH_KEY': 
                return {
                    ...state,
                    searchKey: "",
                };
    
            case 'SET_SEARCH_RESULTS': 
                return {
                    ...state,
                    searchResults : state.searchResults.concat(action.value)
                }
            case 'RESET_SEARCH_RESULTS' :
                return {
                    ...state,
                    searchResults : []
                }
            case 'SET_FEATURED_GIFS' : 
                return {
                    ...state,
                    featuredGifs: state.featuredGifs.concat(action.value)
                }
            case 'SET_SEARCH_NUM': 
                return {
                    ...state,
                    searchNum: action.value
                }  
            case 'SET_PREVIEW_GIF': {
                return {
                    ...state,
                    previewGif: action.value
                }
            }  
            default: return initialState;        
        }
    }

    const [ appState, stateDispatcher ] = useReducer(reducerFn, initialState);

    return <AppContext.Provider value={{ 
                                        searchKey: appState.searchKey, 
                                        searchResults: appState.searchResults, 
                                        searchNum: appState.searchNum, 
                                        previewGif: appState.previewGif, 
                                        featuredGifs : appState.featuredGifs, 
                                        stateDispatcher
                                        }}>
                { props.children }
            </AppContext.Provider>
}

export default AppContextProvider;