import styled from "styled-components";
import { Form } from "react-router-dom";
import { useState } from "react";

const ReportPage = () => {
  const [value, setValue] = useState();
  return (
    <Form method="post">
      <h4>Report please the reason of emergency abort.</h4>
      <Report>
        <div className="column">
          <p>Operator name: {value}</p>
          <div className="row">
            <label htmlFor="operator">Operator 1</label>
            <input
              className="custom-radio"
              type="radio"
              value="Operator 1"
              name="operator"
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <label htmlFor="operator">Operator 2</label>
            <input
              className="custom-radio"
              type="radio"
              value="Operator 2"
              name="operator"
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
          <p>Pick the reason of abort:</p>
          <div className="row">
            <label htmlFor="reason">Reason 1</label>
            <input className="custom-radio" type="radio" name="reason"></input>
            <label htmlFor="reason">Reason 2</label>
            <input className="custom-radio" type="radio" name="reason"></input>
            <label htmlFor="reason">Reason 3</label>
            <input className="custom-radio" type="radio" name="reason"></input>
          </div>

          <p>
            <label htmlFor="reporttext">Describe:</label>
          </p>
          <div className="row">
            <textarea
              name="reporttext"
              rows="10"
              cols="60"
              className="textarea"
              placeholder="State your issue"
            ></textarea>
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
