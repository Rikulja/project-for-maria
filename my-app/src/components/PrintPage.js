import { Form } from "react-router-dom";

const PrintPage = () => {
  return (
    <Form method="post">
      <div>
        <h4>
          The protocol is now ready and can be found in the directory
          C:/Documents/XXXXX
        </h4>
        <p>Do you want to print the results?</p>
        <button>Print</button>
        <button type="submit">Finish</button>
      </div>
    </Form>
  );
};

export default PrintPage;
