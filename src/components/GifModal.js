import React from 'react'
import Modal from 'react-modal'

const GifModal = (props) => {

    if (!props.selectedGif) {
        return <div> </div>
    }

    // need isOpen and onRequestClose for react modal
    // onRequestClose takes a function, so it needs a handler from App and tied to closeModal method in App

    return (
        <Modal isOpen= {props.modalIsOpen} 
               onRequestClose= { () => props.onRequestClose() }>
            <div>
                <img src= { props.selectedGif.images.original.url } alt="" />
                <p><strong>Source:</strong> <a href={ props.selectedGif.source} > {props.selectedGif.sources} </a> </p>
                <p><strong>Rating:</strong> {props.selectedGif.rating } </p>

                <button onClick={() => props.onRequestClose()}> Close </button>
            </div>
        </Modal>
    )
}

export default GifModal