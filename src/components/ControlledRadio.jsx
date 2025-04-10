import './Radio.css'
import {useState} from "react";


export default function ControlledRadio() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(selectedOption === 'first'){
            alert("You chose correct answer.");
        }else{
            alert('uncorrect answer.');
        }
    }



    return (
        <>
            <h1>Controlled</h1>
            <form onSubmit={handleSubmit}>
                <h3>2 + 2?</h3>
                <div>
                    <input
                        type="radio"
                        id='first'
                        value='first'
                        name='radioInput'
                        checked={selectedOption === 'first'}
                        onChange={handleChange} />
                    <label htmlFor="radioButton">4</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id='second'
                        value='second'
                        name='radioInput'
                        checked={selectedOption === 'second'}
                        onChange={handleChange}/>
                    <label htmlFor="radioButton">7</label>
                </div>
                <button type='submit'>Check</button>
            </form>
        </>
    )
}