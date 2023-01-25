import './Screen.css'

function Screen({value}) {
    return(
        <input className='screen' value={value} readOnly/>
    );
}

export default Screen;