import React,  { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './Modal.scss';
import ReactModal from "react-modal";
import { Cancel } from "@mui/icons-material";
import SearchBar from "../../Components/SearchBar/SearchBar";
import PillList from "../../Components/PillList/PillList";

const Modal = ({ data, onItemClick, modalState, setModalState }) => {
  const [filteredData, setFilteredData] = useState(data)
  console.log(filteredData);
  useEffect(() => {
    setFilteredData(data)
  }, [data]);

  const handleOnClick = (index) => {
    onItemClick(filteredData[index])
  }

  const renderContent = () => {
    return (
      <div>
        <Cancel onClick={() => setModalState(false)}></Cancel>
        <div className="modal">
            <SearchBar data={data} onInputChange={setFilteredData}/>
          </div>
          <PillList data={filteredData} onItemClick={handleOnClick}/>
      </div>
    )
  }

  return (
    <ReactModal
      isOpen={modalState}
      className="modal__modal"
      overlayClassName="modal__overlay"
    >
      { renderContent() }
    </ReactModal>
  );
}

Modal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  openModal: PropTypes.func
}

Modal.defaultProps = {
  data: [],
  onItemClick: (index) => index,
  openModal: () => null
}

export default Modal;

