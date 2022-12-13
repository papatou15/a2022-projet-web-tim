import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToByHash(ref, hash){
    const location = useLocation();

    useEffect(() => {
        if (location.hash === hash) {
            ref.current.scrollIntoView();
        }
    },[ref])
}