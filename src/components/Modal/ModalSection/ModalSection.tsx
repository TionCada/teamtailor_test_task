import React from 'react';
import './ModalSection.scss'

interface ModalSectionProps {
    title: string;
    children: React.ReactNode;
}

const ModalSection = ({title, children}: ModalSectionProps) => {
    return (
        <div className='modal_section_container'>
            <p>{title}</p>
            {children}
        </div>
    );
}

export default ModalSection;
