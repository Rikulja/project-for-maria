import { Form } from "react-router-dom";

export default function Decision() {
  return (
    <Form method="post">
      <div>
        <button type="submit" name="finish">
          Finish/Print
        </button>
        <button type="submit" name="new">
          Place New Ampoule
        </button>
      </div>
    </Form>
  );
}
