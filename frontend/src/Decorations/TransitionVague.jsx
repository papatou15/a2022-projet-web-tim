import './TransitionVague.scss';

export default function TransitionVague({couleurBackgroundTransition, 
                                        couleurCourbe, 
                                        clipPath, 
                                        minHeight,
                                        transitionY=0,
                                        rotationX=0,
                                        isSimple=false,
                                        isTransparent=false,
                                        couleurBackground
                                        }){

    const styleTransition = {
        minHeight: minHeight,
        backgroundColor: couleurBackgroundTransition
    }

    const styleCurve = {
        clipPath: clipPath,
        backgroundColor: couleurCourbe,
        transform: `rotateX(${rotationX}deg) translateY(${transitionY}px)`,
    }

    const styleBackground = {
        backgroundColor: couleurBackground,
    }

    return (
        <div style={styleTransition} className="TransitionVague" issimple={`${isSimple}`}>
            <div style={styleCurve} className="curve"></div>
            {
                isTransparent ?
                <div style={styleBackground} className="background"></div>
                :
                <></>
            }
        </div>
    );
}