import styled from "styled-components";
import { Form } from "react-router-dom";
import { useState } from "react";
import { useRedirectIfNecessary } from "storage";

const AmpouleTypesPage = (e) => {
  useRedirectIfNecessary();

  const [value, setValue] = useState(1);
  const maxNumberHandler = (e) => {
    const max = 1;
    const min = 0;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(value);
  };

  return (
    <Form method="post">
      <StyledForm>
        <h4>
          Perform the control of the ampoules and calculate the ampoules of
          different types
        </h4>
        <div className="column">
          <div className="row">
            <input
              type="number"
              name="typeA"
              value={value}
              onChange={maxNumberHandler}
            />
            <label htmlFor="typeA">Type A ampoules </label>
          </div>
          <div className="row">
            <input
              type="number"
              name="typeB"
              value={value}
              onChange={maxNumberHandler}
            />
            <label htmlFor="typeB">Type B ampoules</label>
          </div>
          <div className="row">
            <input
              type="number"
              name="typeC"
              value={value}
              onChange={maxNumberHandler}
            />
            <label htmlFor="typeC">Type C ampoules</label>
          </div>
          <div className="row">
            <input
              type="number"
              name="other"
              value={value}
              onChange={maxNumberHandler}
            />
            <label htmlFor="other">Other ampoules</label>
          </div>
          <button type="submit">Next</button>
        </div>
      </StyledForm>
    </Form>
  );
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  display: flex;
  .column {
    margin: 0 auto 2rem;
    min-width: 200px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  label {
    display: flex;
    align-items: center;
    font-size: 2rem;
    margin-left: 1.5rem;
  }
  input {
    color: #344d67;
    font-size: 2rem;
    max-width: 4rem;
    height: 3.5rem;
    text-align: center;
    align-items: center;
    padding-left: 15px;
    margin: 15px 10px 5px 0;
    border: 1px solid #344d67;
  }
`;
export default AmpouleTypesPage;
