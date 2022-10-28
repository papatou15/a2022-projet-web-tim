import './ExpanderSection.scss';

export default function ExpanderSection({children, expanderState}){

    return (
        <div className="ExpanderSection" expanderstate={expanderState ? "true" : "false"}>
            {children}
        </div>
    );
}