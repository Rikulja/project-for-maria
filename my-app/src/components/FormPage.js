//Styled
import styled from "styled-components";

function FormPage() {
  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>

      <Form>
        <div className="column">
          <div className="row">
            <label htmlFor="pname">Product Name</label>
            <input type="text" id="pname" name="pname" />
          </div>
          <div className="row">
            <label htmlFor="mdate"> Manufacture Date</label>
            <input type="text" name="mdate" />
          </div>
          <div className="row">
            <label htmlFor="dcontrol"> Date of Control</label>
            <input type="text" name="dcontrol" />
          </div>
          <div className="row">
            <label htmlFor="operator"> Operator Name(s)</label>
            <input type="text" name="operator" />
          </div>
          <div className="row">
            <label htmlFor="room"> Room Nr</label>
            <input type="text" name="room" />
          </div>
        </div>
        <button type="submit" value="Submit">
          Next
        </button>
      </Form>
    </div>
  );
}

const Form = styled.div`
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
    margin: 1rem;
    font-size: 1.7rem;
  }
  input {
    align-items: center;
    margin: 15px 10px 5px 0;
    border: 2px solid #344d67;
  }
`;

export default FormPage;
