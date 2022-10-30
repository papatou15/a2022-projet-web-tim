
import './ExpanderButton.scss';

export default function ExpanderButton({children, onClick}){

    return (
        <a onClick={onClick} className='ExpanderButton'>{children}</a>
    );
}