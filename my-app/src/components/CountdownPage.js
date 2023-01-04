//Styled
import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import { Form } from "react-router-dom";
import formatDuration from "format-duration";

const CountdownPage = () => {
  const [time, setTime] = useState(1);
  const values = useLoaderData();
  const isFinished = time === 0;

  useEffect(() => {
    const updateTime = () => {
      const currentTime = Date.now();
      const durationTime = 10;
      const timeElapsed = (currentTime - values.startTime) / 1000; //time has gone
      const timeRemaining = durationTime - timeElapsed;
      setTime(Math.max(0, timeRemaining));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [values.startTime]); //when values changed then it needs to reset the effect

  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>
      <Form method="post">
        <Countdown>
          <h4>
            The ampoules are placed vertically for &nbsp;{" "}
            <span> {formatDuration(1000 * time, { leading: true })}</span>
            &nbsp; minutes
          </h4>
          <div className="buttons">
            <button className="abort">Abort</button>
            <button type="submit" disabled={!isFinished}>
              Next
            </button>
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
  span {
    font-size: 2rem;
    color: #2c3639;
    text-shadow: -1px 0px 0px white, 1px 0px 0px white, 0px -1px 0px white,
      0px 1px 0px white;
  }
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
