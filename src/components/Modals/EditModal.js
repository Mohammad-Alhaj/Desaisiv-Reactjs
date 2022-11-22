import { useState } from "react";
import "./Modal.css";

export default function EditModal({ id, handleEdit, firstName_, lastName_ }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState(firstName_);
  const [lastName, setLastName] = useState(lastName_);

  const newInfo = (e) => {
    e.preventDefault();
    // send data to Employee component
    handleEdit(id, firstName, lastName);
    setModalOpen(false);
  };

  return (
    <>
      <button className="edit-btn" onClick={() => setModalOpen(true)}>
        Edit
      </button>
      {modalOpen && (
        <div>
          <div className="modalBackground">
            <div className="modal-container edit-container">
              <div className="titleCloseBtn">
                <button onClick={() => setModalOpen(false)}>X</button>
              </div>
              <div className="title">Please Enter New Information</div>
              <form onSubmit={newInfo}>
                <div className="edit-input">
                  <input
                    defaultValue={firstName_}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    autoFocus
                    placeholder="First Name"
                  />
                  <input
                    defaultValue={lastName_}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="modal-footer">
                  <button onClick={() => setModalOpen(false)} id="cancelBtn">
                    Cancel
                  </button>
                  <button>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
