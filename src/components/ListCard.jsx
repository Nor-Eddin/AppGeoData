import React from 'react';
import ModalContent from './ModalContent';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ListCard({ country }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <li onClick={()=>setShowModal(!showModal)} className="relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform">

                <h4 className="absolute left-0 top-0 p-1 bg-gray-100 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] rounded"> {country.name.common}</h4>
                <img className="w-full h-full object-cover rounded" src={country.flags.svg} alt="" />
            </li>
            {showModal && createPortal(<ModalContent country={country} closeModal={()=>setShowModal(!showModal)}/>,document.body)}
        </>
    )
}
