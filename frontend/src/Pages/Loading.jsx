import './Loading.scss';

export default function Loading({isLoading: loadingValue}){
    return (
        <main isloading={loadingValue.toString()} className="Loading">
            <div className='ronds'>
                <div className="rond"></div>
                <div className="rond"></div>
            </div>
            <div className="point"></div>
            <img src="../images/LogoTIMREmpli.png"/>
            <div className='ronds'>
                <div className="rond"></div>
                <div className="rond"></div>
            </div>
        </main>
    );
}