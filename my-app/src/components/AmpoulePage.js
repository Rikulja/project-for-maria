//Styled
import styled from "styled-components";
import { Form, useParams } from "react-router-dom";
import { useState } from "react";

const AmpoulePage = () => {
  const [checked, setChecked] = useState(false);
  const { direction } = useParams();
  const isVertical = direction === "vertical";
  const time = isVertical ? "00:15" : "00:20";
  const position = isVertical ? "vertically" : "horizontally";

  function checkHandler() {
    setChecked(!checked);
  }

  return (
    <Form method="post">
      <Ampoule>
        <h4>
          Place ampoules {position} and leave them for {time} minutes
        </h4>
        <div className="glow">
          Check when the ampoule is placed in the right direction
        </div>
        <Checkmark>
          <input
            onChange={checkHandler}
            checked={checked}
            type="checkbox"
            id="ampoule"
            name="ampoule"
          ></input>
        </Checkmark>
        <button type="submit" disabled={!checked}>
          Start
        </button>
      </Ampoule>
    </Form>
  );
};

const Ampoule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  button {
    margin: 0 auto;
  }
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
