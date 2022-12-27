//Styled
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function FormPage() {
  const url = "";
  const [data, setData] = useState({
    product: "",
    dmanufacture: "",
    dcontrol: "",
    operator: "",
    roomNr: "",
  });

  //functions

  function handler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submitForm(e) {
    e.preventDefault();

    Axios.post(url, {
      product: data.product,
      dmanufacture: data.dmanufacture,
      dcontrol: data.dcontrol,
      operator: data.operator,
      roomNr: data.roomNr,
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>

      <Form onSubmit={(e) => submitForm(e)}>
        <div className="column">
          <div className="row">
            <label htmlFor="pname">Product Name</label>
            <input
              onChange={(e) => handler(e)}
              value={data.product}
              id="product"
              type="text"
              name="pname"
            />
          </div>
          <div className="row">
            <label htmlFor="mdate"> Manufacture Date</label>
            <input
              className="date"
              onChange={(e) => handler(e)}
              value={data.dmanufacture}
              id="dmanufacture"
              required
              type="date"
              name="mdate"
            />
          </div>
          <div className="row">
            <label htmlFor="dcontrol"> Date of Control</label>
            <input
              className="date"
              onChange={(e) => handler(e)}
              value={data.dcontrol}
              id="dcontrol"
              required
              type="date"
              name="dcontrol"
            />
          </div>
          <div className="row">
            <label htmlFor="operator"> Operator Name(s)</label>
            <select
              onChange={(e) => handler(e)}
              value={data.operator}
              id="operator"
              className="option"
            >
              <option value="operator1">Operator 1</option>
              <option value="operator2">Operator 2</option>
            </select>
          </div>
          <div className="row">
            <label htmlFor="room"> Room Nr</label>
            <input
              onChange={(e) => handler(e)}
              value={data.roomNr}
              id="roomNr"
              required
              type="number"
              name="room"
            />
          </div>
        </div>

        <Link to="/ampoule-vertical">
          <button>Next</button>
        </Link>
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
    display: flex;
    align-items: center;
    margin: 1rem;
    font-size: 1.7rem;
  }
  input {
    color: #344d67;
    font-size: 1.4rem;
    padding: 10px 20px;
    align-items: center;
    margin: 15px 10px 5px 0;
    border: 1px solid #344d67;
  }
  .option {
    color: #344d67;
    font-size: 1.4rem;
    padding: 10px;
    border: 1px solid #344d67;
    min-width: 314px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .date {
    min-width: 314px;
  }
`;

export default FormPage;
