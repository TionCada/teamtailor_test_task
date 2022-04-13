import React, { Dispatch, SetStateAction } from 'react';
import './Modal.scss'
import Button from "../Button/Button";

interface ModalProps {
    isModalActive: boolean;
    setIsModalActive: Dispatch<SetStateAction<boolean>>;
    submitHandler: () => void;
    isDataFetching: boolean;
    children: React.ReactNode;
}

const Modal = ({isModalActive, setIsModalActive, submitHandler, children, isDataFetching}: ModalProps) => {

    return (
        <div className={`modal_container ${isModalActive ? 'active' : ''}`} onClick={() => setIsModalActive(false)}>
            <div className='modal_content' onClick={e => e.stopPropagation()}>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    submitHandler()
                }}>
                    <p className='modal_header'>Export Report</p>
                    <div className='modal_children'>
                        {children}
                    </div>
                    <hr/>
                    <div className='modal_nav_buttons'>
                        <Button isSubmitButton={false} closeModalHandler={setIsModalActive} isDisabled={false} mode={'light'}>Cancel</Button>
                        <Button isSubmitButton={true} isDisabled={isDataFetching} mode={'dark'}>OK</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
