import {useState } from "react";



const useObserver = (execFn, isLoading) => {

    const [isShown, setIsShown] = useState(false);

    const observer = new IntersectionObserver((entries)=> {

        
        let intersecting =  entries[0].isIntersecting;
        setIsShown(intersecting);
        
        if(isShown && !isLoading) {
            setTimeout(() => {
                execFn();
            }, 1000);
        }
    });

    return {
        observer
    };
}

export default useObserver;