//Styled
import styled from "styled-components";
// import { Link } from "react-router-dom";

const CountdownPage = () => {
  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>
      <Countdown>
        <h4>The ampoules are placed in one direction for NN:NN minutes</h4>
        <div className="buttons">
          <button className="abort">Abort</button>
          <button>Next</button>
        </div>
      </Countdown>
    </div>
  );
};
const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-style: italic;
  .buttons {
    flex-direction: row;
    button {
      margin: 2rem 4rem;
    }
    .abort {
      background-color: #d73851;
      &:hover {
        border: 1px solid royalblue;
      }
    }
  }
`;

export default CountdownPage;
