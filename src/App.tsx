import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import './App.css';
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";

function App() {

  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div>
      <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
        <Input placeholder={'Placeholder'}/>
        <Button mode='light'>OK</Button>
        <RadioButtonGroup radioButtons={[{value: 'hello', name: 'hello'}, {value: 'world', name: 'world'}]}/>
      </Modal>
      <button onClick={() => setIsModalActive(true)}>Press Me</button>
    </div>
  );
}

export default App;
