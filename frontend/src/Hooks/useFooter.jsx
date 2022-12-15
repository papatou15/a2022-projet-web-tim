import { useEffect, useContext } from "react";
import { FooterContext } from "../Context/FooterContext";

export default function useFooter(isVisible){

    const [footerView, setFooterView] = useContext(FooterContext);

    useEffect(() => {
        setFooterView(isVisible);
    }, [isVisible]);
}