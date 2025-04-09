import {useRef} from "react";

export default function UncontrolledRadio() {
    const radioButton = useRef(null);
    const handleChangeRadioButton = (event) =>{
        alert('You chose ' + radioButton.current.value);
        event.preventDefault();
    }
    return(
        <form>
            <div>
                <input ref={radioButton} type="radio" id='first' value='first'/>
                <label htmlFor="radioButton">First</label>
            </div>
            <div>
                <input ref={radioButton} type="radio" id='second' value='second'/>
                <label htmlFor="radioButton">Second</label>
            </div>
            <button type='submit' onClick={handleChangeRadioButton}>Check</button>
        </form>
)
}