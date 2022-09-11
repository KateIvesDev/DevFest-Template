import React, {useState} from 'react';
import Modal from 'react-modal'
import SpeakerBio from './bio'
import {BsPersonLinesFill} from 'react-icons/bs'
import {MdClose } from "react-icons/md";

const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '50vh'
    },
  };

const BioModal = ( {speaker} ) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }
    return (
        <>
            <button onClick={setModalIsOpenToTrue} className='space-x-4 text-xxl vertical-align-top hover:text-white' aria-label='Speaker Bio'><BsPersonLinesFill/></button>

            <Modal 
            appElement={document.getElementById('root')}
            isOpen={modalIsOpen}
            onRequestClose={setModalIsOpenToFalse}
            style={customStyles}>
                <button onClick={setModalIsOpenToFalse}><MdClose/>Close</button>
                <SpeakerBio speaker={speaker}/>
            </Modal>
        </>
    )
}

export default BioModal