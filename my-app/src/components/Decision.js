import { Form } from "react-router-dom";
import { useRedirectIfNecessary } from "storage";

export default function Decision() {
  useRedirectIfNecessary();
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
