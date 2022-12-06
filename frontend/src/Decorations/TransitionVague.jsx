import { useEffect, useState } from 'react';
import './TransitionVague.scss';

export default function TransitionVague({couleurBackgroundTransition, 
                                        couleurCourbe, 
                                        clipPath, 
                                        minHeight,
                                        transitionY=0,
                                        rotationX=0,
                                        isSimple=false,
                                        isTransparent=false,
                                        couleurBackground,
                                        position='relative',
                                        top=null,
                                        bottom=null,
                                        }){


    const [transparent, setTransparent] = useState(false);
    const styleTransition = {
        minHeight: minHeight,
        maxHeight: minHeight,
        backgroundColor: couleurBackgroundTransition,
        position: position,
        top: top,
        bottom: bottom,
    }
    useEffect(() => {
        if (isTransparent === "1") {
            setTransparent(true);
        } else if (isTransparent === true) {
            setTransparent(true);
        }
    }, [isTransparent])

    const styleCurve = {
        maxHeight: minHeight,
        clipPath: clipPath,
        backgroundColor: couleurCourbe,
        transform: `rotateX(${rotationX}deg) translateY(${transitionY}px)`,
    }

    const styleBackground = {
        backgroundColor: couleurBackground,
    }

    return (
        <div style={styleTransition} className="TransitionVague" issimple={`${isSimple}`} istranparent={`${isTransparent}`}>
            <div style={styleCurve} className="curve"></div>
            {
                transparent ?
                <div style={styleBackground} className="background"></div>
                :
                <></>
            }
        </div>
    );
}