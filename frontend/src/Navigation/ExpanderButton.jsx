
import './ExpanderButton.scss';

export default function ExpanderButton({children, expanderState, setExpanderState}){

    const handleClick = () => { 
        setExpanderState(!expanderState);
    }

    return (
        <a onClick={handleClick} className='ExpanderButton'>{children}</a>
    );
}