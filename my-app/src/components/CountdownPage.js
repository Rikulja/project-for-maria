//Styled
import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import { Form, useParams } from "react-router-dom";
import formatDuration from "format-duration";
// import { FaInfo } from "react-icons/fa";
//components
import PopupModal from "./PopupModal";
import { useAmpouleTaskInfo, useRedirectIfNecessary } from "storage";

const CountdownPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [time, setTime] = useState(1);
  const values = useLoaderData();
  const isFinished = time === 0;
  const { direction } = useParams();
  const { position, durationTime } = useAmpouleTaskInfo(direction);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = Date.now();
      const timeElapsed = (currentTime - values.startTime) / 1000; //time has gone
      const timeRemaining = durationTime - timeElapsed;
      setTime(Math.max(0, timeRemaining));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [values.startTime, durationTime]); //when values changed then it needs to reset the effect
  useRedirectIfNecessary();
  return (
    <>
      <Countdown>
        <Form method="post">
          <h4>
            The ampoules are placed {position} for &nbsp;
            <span> {formatDuration(1000 * time, { leading: true })}</span>
            &nbsp; minutes
          </h4>
          <i>
            (a screen is now locked for NN minutes, so that no interference can
            be made)
          </i>
          {/* <div class="info">
            <FaInfo />
            <span class="extra-info">
              A little column extra info. Aaand just a little bitmore
            </span>
          </div> */}
        </Form>
      </Countdown>
      <Form method="post">
        <Countdown>
          <div className="buttons">
            <button
              className="abort"
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
              }}
            >
              Abort
            </button>
            <button type="submit" disabled={!isFinished}>
              Next
            </button>
          </div>
          {openModal && <PopupModal closeModal={setOpenModal} />}
        </Countdown>
      </Form>
    </>
  );
};
const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-style: italic;
  align-items: center;
  span {
    font-size: 2rem;
    color: #2c3639;
    text-shadow: -1px 0px 0px white, 1px 0px 0px white, 0px -1px 0px white,
      0px 1px 0px white;
  }
  .info {
    font-size: 20px;
    padding-left: 5px;
    width: 20px;
    border-radius: 15px;

    .info:hover {
      background-color: white;
      padding: 0 0 0 5px;
      width: 315px;
      text-align: left !important;
    }
  }
  .extra-info {
    display: none;
    line-height: 30px;
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 50px;
  }
  .info:hover .extra-info {
    display: block;
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
    * {
      transition: all 0.2s ease;
    }
  }
`;

export default CountdownPage;
