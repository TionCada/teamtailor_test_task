import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import './App.css';
import Input from "./components/Input/Input";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import ModalSection from "./components/Modal/ModalSection/ModalSection";
import TimePicker from "./components/TimePicker/TimePicker";
import Dropdown from "./components/Dropdown/Dropdown";
import DatePicker from "./components/DatePicker/DatePicker";

export type FormatValue = 'Excel' | 'CSV';
export type ScheduleValue = 'No Repeat' | 'Specific Date' | 'Daily' | 'Weekly';
type Payload = {
    reportName: string;
    formatValue: string;
    emailValue: string;
    scheduleValue: string;
    dayValue?: string;
    dateValue?: string;
    timeValue?: string;
}

function App() {

    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [isDataFetching, setIsDataFetching] = useState<boolean>(false);
    const [reportName, setReportName] = useState<string>('')
    const [formatValue, setFormatValue] = useState<FormatValue>('Excel');
    const [emailValue, setEmailValue] = useState<string>('');
    const [scheduleValue, setScheduleValue] = useState<ScheduleValue>('No Repeat');
    const [dateValue, setDateValue] = useState<string>('');
    const [timeValue, setTimeValue] = useState<string>('');
    const [dayValue, setDayValue] = useState<string>('Monday');

    const fetchHandler = (payload: Payload) => {
        setIsDataFetching(true)
        fetch('https://postman-echo.com/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            res.status === 200 && alert('Success!')
            setIsDataFetching(false)
        })
    }

    const submitHandler = () => {

        const defaultPayloadValues = {
            reportName: reportName,
            formatValue: formatValue,
            emailValue: emailValue,
            scheduleValue: scheduleValue
        }

        switch (scheduleValue) {
            case 'No Repeat':
                fetchHandler({
                    ...defaultPayloadValues,
                })
                break
            case 'Specific Date':
                fetchHandler({
                    ...defaultPayloadValues,
                    dateValue: dateValue,
                    timeValue: timeValue
                })
                break
            case 'Daily':
                fetchHandler({
                    ...defaultPayloadValues,
                    timeValue: timeValue
                })
                break
            case 'Weekly':
                fetchHandler({
                    ...defaultPayloadValues,
                    dayValue: dayValue,
                    timeValue: timeValue
                })
                break
            default:
                fetchHandler({
                    ...defaultPayloadValues,
                })
                break
        }
    }

    return (
        <div className='app_container'>
            <Modal isDataFetching={isDataFetching} isModalActive={isModalActive} submitHandler={submitHandler} setIsModalActive={setIsModalActive}>
                <ModalSection title={'Report Name'} children={<Input type={'text'} value={reportName} setValue={setReportName} placeholder={'Shareablee Report'}/>}/>
                <ModalSection title={'Format'} children={<RadioButtonGroup value={formatValue} setValue={setFormatValue} initData={['Excel', 'CSV']}/>}/>
                <ModalSection title={'E-mail to'} children={<Input type={'email'} value={emailValue} setValue={setEmailValue} placeholder={'client@company.com'}/>}/>
                <ModalSection title={'Schedule'} children={<RadioButtonGroup value={scheduleValue} setValue={setScheduleValue} initData={['No Repeat', 'Specific Date', 'Daily', 'Weekly']}/>}/>

                {scheduleValue === 'No Repeat' && <div className='no_schedule_option'/>}
                {scheduleValue === 'Specific Date' && <ModalSection title={'Date'} children={
                    <div className='weekly_schedule_option'>
                        <DatePicker value={dateValue} setValue={setDateValue}/>
                        <p>at</p>
                        <TimePicker value={timeValue} setValue={setTimeValue}/>
                    </div>}
                />}
                {scheduleValue === 'Daily' && <ModalSection title={'Everyday at'} children={<TimePicker value={timeValue} setValue={setTimeValue}/>}/>}
                {scheduleValue === 'Weekly' && <ModalSection title={'Every'} children={
                    <div className='weekly_schedule_option'>
                        <Dropdown value={dayValue} setValue={setDayValue}
                                  options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}/>
                        <p>at</p>
                        <TimePicker value={timeValue} setValue={setTimeValue}/>
                    </div>}
                />}
            </Modal>
            <button onClick={() => setIsModalActive(true)}>Press Me</button>
        </div>
    );
}

export default App;
