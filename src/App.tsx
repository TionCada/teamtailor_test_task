import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import './App.css';
import Input from "./components/Input/Input";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import ModalSection from "./components/Modal/ModalSection/ModalSection";

type FormatValue = 'Excel' | 'CSV';
type ScheduleValue = 'No Repeat' | 'Specific Date' | 'Daily' | 'Weekly';

function App() {

    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [reportName, setReportName] = useState<string>('')
    const [formatValue, setFormatValue] = useState<FormatValue>('Excel');
    const [emailValue, setEmailValue] = useState<string>('');
    const [scheduleValue, setScheduleValue] = useState<ScheduleValue>('No Repeat');

    return (
        <div>
            <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
                <ModalSection title={'Report Name'} children={<Input value={reportName} setValue={setReportName}
                                                                     placeholder={'Shareablee Report'}/>}/>
                <ModalSection title={'Format'} children={<RadioButtonGroup value={formatValue} setValue={setFormatValue}
                                                                           initData={['Excel', 'CSV']}/>}/>
                <ModalSection title={'E-mail to'} children={<Input value={emailValue} setValue={setEmailValue}
                                                                   placeholder={'client@company.com'}/>}/>
                <ModalSection title={'Schedule'} children={<RadioButtonGroup value={scheduleValue} setValue={setScheduleValue}
                                                          values={['No Repeat', 'Specific Date', 'Daily', 'Weekly']}/>}/>
                {scheduleValue === 'No Repeat' && <></>}
                {scheduleValue === 'Specific Date' && <></>}
                {scheduleValue === 'Daily' && <></>}
                {scheduleValue === 'Weekly' && <></>}
            </Modal>
            <button onClick={() => setIsModalActive(true)}>Press Me</button>
        </div>
    );
}

export default App;
