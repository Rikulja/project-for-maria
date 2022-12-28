import { useLoaderData } from "react-router";

const TemporaryStorage = () => {
  const values = useLoaderData(); //use react router hook, we want get a lodaer data

  return (
    <div>
      <div>Product Name: {values.pname} </div>
      <div>Manufacture Date: {values.mdate} </div>
      <div>Date of Control:{values.dcontrol} </div>
      <div>Operator Name: {values.operator}</div>
      <div>Room Nr: {values.room}</div>
      <div>Verical : {values.vertical}</div>
      <div>Horizontal : {values.horizontal}</div>
    </div>
  );
};

export default TemporaryStorage;
