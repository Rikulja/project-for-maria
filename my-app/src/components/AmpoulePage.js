//Styled
import styled from "styled-components";
import { Link } from "react-router-dom";

const AmpoulePage = () => {
  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>
      <Ampoule>
        <h4>Place ampoules in one direction and leave them for NN minutes</h4>
        <div className="glow">
          Press when ampoule is placed in a right direction
        </div>
        <Checkmark>
          <input type="checkbox" id="ampoule" name="ampoule"></input>
        </Checkmark>
        <Link to="/countdown-vertical">
          <button>Start</button>
        </Link>
      </Ampoule>
    </div>
  );
};

const Ampoule = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .glow {
    font-style: italic;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;

const Checkmark = styled.div`
  input[type="checkbox"] {
    cursor: pointer;
    margin: 2rem;
    text-align: center;
    height: 2.3rem;
    width: 2.3rem;
    background-color: #eee;
  }
`;

export default AmpoulePage;
