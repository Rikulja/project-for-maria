import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { updateCurrentPage } from "./storage";

export default function PopupModal({ closeModal }) {
  const navigate = useNavigate();
  return (
    <Modal>
      <div className="title">
        <h3>Are you sure you want to continue?</h3>
      </div>
      <div className="body">
        <p>
          Please state the reason why you aborted the process..... If not,please
          click Cancel button.
        </p>
      </div>
      <div className="footer">
        <button id="cancelBtn" onClick={() => closeModal(false)}>
          Cancel
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm("Are you sure you want to stop the process?")) {
              updateCurrentPage("/report");
              navigate("/report");
            }
          }}
        >
          Report
        </button>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  background-color: white;
  width: 900px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.066) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  position: absolute;
  top: 20%;
  .title {
    margin-top: 10px;
    display: inline-block;
  }
  p {
    color: black;
  }
  .footer {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    #cancelBtn {
      background-color: crimson;
    }
    button {
      margin-right: 10px;
    }
  }
`;
