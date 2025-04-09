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
        <form>
            <h3></h3>
            <div>
                <input ref={firstRadio} type="radio" id='first' value='first' name='radioInput'/>
                <label htmlFor="radioButton">First</label>
            </div>
            <div>
                <input type="radio" id='second' value='second' name='radioInput'/>
                <label htmlFor="radioButton">Second</label>
            </div>
            <button type='submit' onClick={handleChangeRadioButton}>Check</button>
        </form>
        </>
)
}