import { useEffect } from "react";

export default function useCliqueExterieurAlert(ref, onOutsideClick, exceptionRef) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (exceptionRef && event.target == exceptionRef.current) {
                    return;
                }
            onOutsideClick();
            }
        } 

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }