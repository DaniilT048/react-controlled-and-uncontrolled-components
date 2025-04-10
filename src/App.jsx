import './App.css'
import UncontrolledRadio from "./components/UncontrolledRadio.jsx";
import Card from "./components/Card.jsx";
import ControlledRadio from "./components/ControlledRadio.jsx";
import UserData from "./components/UserData.jsx";

function App() {
  return (
    <>
        <Card>
            <UncontrolledRadio/>
        </Card>
            <ControlledRadio/>
        <Card>
            <UserData/>
        </Card>
    </>
  )
}

export default App
