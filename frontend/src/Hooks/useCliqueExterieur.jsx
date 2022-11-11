import { useEffect } from "react";

export default function useCliqueExterieur(ref, onOutsideClick, exceptionRef) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (exceptionRef && event.target === exceptionRef.current) {
                    return;
                }
            onOutsideClick();
            }
        } 

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    }, [ref]);
  }