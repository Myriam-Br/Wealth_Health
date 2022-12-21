import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-modal';
import { resetInputs } from "../features/inputSlice";
import { resetForm } from "../features/formSlice";

function ModalContainer (){
    const {isSent} = useSelector(state => state.form)
    const dispatch = useDispatch()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'black'
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#fff';
    }
  
    function closeModal() {
      setIsOpen(false);
      dispatch(resetForm())
      dispatch(resetInputs())
      window.location.reload();
    }

    useEffect(() => {
        if(isSent) {
            openModal()
        }
    })
    
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <button onClick={closeModal}>x</button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Employee has been created successfully! </h2>
            </Modal>
        </div>
       
    )
}

export default ModalContainer;