import styled from "styled-components";
import { Form } from "react-router-dom";
import { useFormula } from "storage";

const FormulaPage = () => {
  const { sum, percentage, result } = useFormula();
  return (
    <Form method="post">
      <StyledForm>
        <h4>
          Perform the control of the ampoules and calculate the ampoules of
          different types
        </h4>
        <div className="column">
          <div className="row">
            <input type="number" disabled value={sum} />
            <label htmlFor="typeA">Sum of types of ampoules</label>
          </div>
          <div className="row">
            <input type="number" disabled value={percentage} />
            <label htmlFor="typeB">% of types of ampoules</label>
          </div>

          <button disabled>Result {result ? "OK" : "NOK"}</button>
        </div>
        <div>
          <button type="submit" disabled>
            Sign
          </button>
        </div>
        <div>
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
export default FormulaPage;
