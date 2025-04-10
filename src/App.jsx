import './App.css'
import UncontrolledRadio from "./components/UncontrolledRadio.jsx";
import Card from "./components/Card.jsx";
import ControlledRadio from "./components/ControlledRadio.jsx";

function App() {
  return (
    <>
        <Card>
            <UncontrolledRadio/>
        </Card>
            <ControlledRadio/>
    </>
  )
}

export default App
