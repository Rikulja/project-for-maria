//Styled
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import { Form } from "react-router-dom";

const CountdownPage = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const values = useLoaderData();
  const [finished, setFinished] = useState(false);

  function checkHandler() {
    setFinished(!finished);
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  // const onClickReset = () => {
  //   clearTimer(getDeadTime());
  // };
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const currentTime = Date.now();
  //     const durationTime = 60;
  //     const timeElapsed = (currentTime - values.startTime) / 1000; //time has gone
  //     const timeRemaining = durationTime - timeElapsed;
  //     setTime(Math.max(0, timeRemaining));
  //   }, 1000);
  //   return () => {
  //     if (this.timeElapsed === 0) {
  //       setFinished(!finished);
  //     }
  //     clearInterval(intervalId);
  //   };
  // }, [values.startTime, finished]); //when values changed then it needs to reset the effect

  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>
      <Form method="post">
        <Countdown>
          <h4>
            The ampoules are placed vertically for &nbsp; <span> {timer}</span>
            &nbsp; minutes
          </h4>
          <div className="buttons">
            <button className="abort">Abort</button>
            <button type="submit" disabled={!finished} onChange={checkHandler}>
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
