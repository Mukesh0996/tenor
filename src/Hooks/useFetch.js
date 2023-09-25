import { useState } from "react";

const useFetch = (url, queryParams = null) => {

    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = async () => {
        try {

            setIsLoading(true);

            if(queryParams !== null) {
                
               //to remove the previous appended pos query params before initiating the network call.
               let updatedURL = url.split("&pos")[0];
               url = updatedURL.concat(`&pos=${queryParams}`)
            }

            let response = await fetch(url, {
                method:"GET"
            });

            let responseData = await response.json();
            console.log(responseData);
            setTimeout(() => {
                setIsLoading(false);
            },3000)
           
            return responseData;

        } catch(error) {
            console.log(error.message);
        }
    }

    // function debhouncer(delay = 1000) {

    //     let timer;
    //     clearTimeout(timer);

    //     timer = setTimeout()



    // }

    return {
        isLoading,
        sendRequest
    }

};

export default useFetch;