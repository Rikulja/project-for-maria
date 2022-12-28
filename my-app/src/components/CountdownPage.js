//Styled
import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import { Form } from "react-router-dom";

const CountdownPage = () => {
  const [time, setTime] = useState(1);
  const values = useLoaderData();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const durationTime = 60;
      const timeElapsed = (currentTime - values.startTime) / 1000; //time has gone
      const timeRemaining = durationTime - timeElapsed;
      setTime(timeRemaining);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [values.startTime]); //when values changed then it needs to reset the effect

  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>
      <Form method="post">
        <Countdown>
          <h4>The ampoules are placed vertically for {time} minutes</h4>
          <div className="buttons">
            <button className="abort">Abort</button>
            <button>Next</button>
          </div>
        </Countdown>
      </Form>
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
