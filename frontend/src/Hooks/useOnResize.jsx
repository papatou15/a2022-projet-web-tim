import { useEffect, useState } from "react";

export default function useOnResize(ref){

    const [dimension, setDimension] = useState(0);

    const handleResize = () => {
        setDimension(ref.current.offsetWidth);
    }

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('load', handleResize)
        }
        }, [ref, handleResize]);

    return dimension;
}