import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import './Modal.scss'
import Button from "../Button/Button";

interface ModalProps {
    isModalActive: boolean;
    setIsModalActive: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

const Modal = ({isModalActive, setIsModalActive, children}: ModalProps) => {

    return (
        <div className={`modal_container ${isModalActive ? 'active' : ''}`} onClick={() => setIsModalActive(false)}>
            <div className='modal_content' onClick={e => e.stopPropagation()}>
                <p className='modal_header'>Export Report</p>
                <div className='modal_children'>
                    {children}
                </div>
                <hr/>
                <div className='modal_nav_buttons'>
                    <Button mode={'light'}>Cancel</Button>
                    <Button mode={'dark'}>OK</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
