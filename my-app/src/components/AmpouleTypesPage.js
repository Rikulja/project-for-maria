import styled from "styled-components";
import { Form } from "react-router-dom";
import { useState } from "react";

const AmpouleTypesPage = () => {
  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>

      <Form method="post">
        <StyledForm>
          <h4>
            Perform the control of the ampoules and calculate the ampoules of
            different types
          </h4>
          <div className="column">
            <div className="row">
              <input type="number" name="typeA" />
              <label htmlFor="typeA">Type A ampoules </label>
            </div>
            <div className="row">
              <input type="number" name="typeB" />
              <label htmlFor="typeB">Type B ampoules</label>
            </div>
            <div className="row">
              <input type="number" name="typeC" />
              <label htmlFor="typeC">Type C ampoules</label>
            </div>
            <div className="row">
              <input type="number" name="other" />
              <label htmlFor="other">Other ampoules</label>
            </div>
            <button type="submit">Next</button>
          </div>
        </StyledForm>
      </Form>
    </div>
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
    font-size: 1.7rem;
    margin-left: 1.5rem;
  }
  input {
    color: #344d67;
    font-size: 1.4rem;
    max-width: 4rem;
    height: 3.5rem;
    text-align: center;
    align-items: center;
    margin: 15px 10px 5px 0;
    border: 1px solid #344d67;
  }
`;
export default AmpouleTypesPage;
