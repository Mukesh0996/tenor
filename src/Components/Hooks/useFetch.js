import { useState } from "react";



const useFetch = (url) => {

    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = async () => {

        try{

            setIsLoading(true);
            let response = await fetch(url, {
                method:"GET"
            });

            let responseData = await response.json();
            setIsLoading(false);

            return responseData;

        } catch(error) {
            console.log(error);
        }

    }

    return {
        isLoading,
        sendRequest
    }

};

export default useFetch;