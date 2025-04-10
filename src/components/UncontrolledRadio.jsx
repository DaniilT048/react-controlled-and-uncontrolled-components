import './Radio.css'
import {useRef} from "react";

export default function UncontrolledRadio() {
    const firstRadio = useRef(null);
    const handleChangeRadioButton = (event) =>{
        if(firstRadio.current.checked){
            alert("right answer");
        }else{
            alert("not right answer");
        }
        event.preventDefault();
    }

    return(
        <>
            <h1>Uncontrolled</h1>
        <form onSubmit={handleChangeRadioButton}>
            <h3>2 + 2?</h3>
            <div>
                <input ref={firstRadio} type="radio" id='first' value='first' name='radioInput'/>
                <label htmlFor="radioButton">4</label>
            </div>
            <div>
                <input type="radio" id='second' value='second' name='radioInput'/>
                <label htmlFor="radioButton">7</label>
            </div>
            <button type='submit'>Check</button>
        </form>
        </>
)
}