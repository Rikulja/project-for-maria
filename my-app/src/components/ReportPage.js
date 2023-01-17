import styled from "styled-components";
import { Form } from "react-router-dom";
import { useState } from "react";

const ReportPage = () => {
  const [value, setValue] = useState({
    operator: "",
    reason: "",
    reporttext: "",
  });

  const [currentDate, setDate] = useState(new Date());

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <Form method="post">
      <h4>Report please the reason of emergency abort.</h4>
      <Report>
        <div className="column">
          <p>Operator name: {`${value.operator}`} </p>
          <div className="row">
            <label htmlFor="operator">Operator 1</label>
            <input
              className="custom-radio"
              type="radio"
              value="Operator 1"
              name="operator"
              onChange={handleChange}
            ></input>
            <label htmlFor="operator">Operator 2</label>
            <input
              className="custom-radio"
              type="radio"
              value="Operator 2"
              name="operator"
              onChange={handleChange}
            ></input>
          </div>
          <p>Pick the reason of abort: {`${value.reason}`} </p>
          <div className="row">
            <label htmlFor="reason">Reason1</label>
            <input
              onChange={handleChange}
              className="custom-radio"
              type="radio"
              value="reason1"
              name="reason"
            ></input>
            <label htmlFor="reason">Reason2</label>
            <input
              onChange={handleChange}
              className="custom-radio"
              value="reason2"
              type="radio"
              name="reason"
            ></input>
            <label htmlFor="reason">Reason3</label>
            <input
              onChange={handleChange}
              className="custom-radio"
              value="reason3"
              type="radio"
              name="reason"
            ></input>
          </div>

          <p>
            <label htmlFor="reporttext">Describe:</label>
          </p>
          <div className="row">
            <textarea
              onChange={handleChange}
              name="reporttext"
              rows="10"
              cols="60"
              className="textarea"
              placeholder="State your issue"
            ></textarea>
            <p>
              Current Date:
              <div>
                {currentDate.toLocaleDateString("et-ET", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                {" " + currentDate.getHours() + ":" + currentDate.getMinutes()}
              </div>
            </p>
          </div>
          <button type="submit">Send</button>
        </div>
      </Report>
    </Form>
  );
};

const Report = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .column {
    margin: 0 auto 2rem;
    min-width: 200px;
    background-color: white;
    padding: 2rem;
  }
  .row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border: 1px solid #344d67;
    padding: 10px 20px;
    align-items: center;
  }
  label {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-style: italic;
  }
  input[type="radio"] {
    height: 1.2rem;
    width: 1.2rem;
    color: red;
  }
  .custom-radio:checked {
    -webkit-appearance: none;
    border: 0.1rem solid #1d1c1c;
    background-color: var(--bg-color);
    border-radius: 50%;
  }
  input[type="radio" i]:checked {
    background-color: #11986d;
    cursor: default;
  }

  p {
    text-align: left;
    font-size: 2rem;
    font-style: bold;
  }
  textarea {
    border: 2px solid blue;
    padding: 10px;
  }
`;

export default ReportPage;
