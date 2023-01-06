import { useLoaderData } from "react-router";
import { useFormula } from "storage";

const TemporaryStorage = () => {
  const values = useLoaderData(); //use react router hook, we want get a lodaer data

  return (
    <div>
      <div>Product Name: {values.pname} </div>
      <div>Manufacture Date: {values.mdate} </div>
      <div>Date of Control:{values.dcontrol} </div>
      <div>Operator Name: {values.operator}</div>
      <div>Room Nr: {values.room}</div>
      <div>Vertical : {values.vertical ? "true" : "false"}</div>
      <div>Horizontal : {values.horizontal ? "true" : "false"}</div>
      <div>types: {JSON.stringify(values.types)}</div>
      <div>formulaResult: {JSON.stringify(useFormula())}</div>
    </div>
  );
};

export default TemporaryStorage;
