import { Form } from "react-router-dom";
import { useRedirectIfNecessary } from "storage";
import styled from "styled-components";

export default function Decision() {
  useRedirectIfNecessary();
  return (
    <Form method="post">
      <StyledDecision>
        <button type="submit" name="finish">
          Finish/Print
        </button>
        <button type="submit" name="new">
          Place New Ampoule
        </button>
      </StyledDecision>
    </Form>
  );
}

const StyledDecision = styled.div`
  button {
    margin-right: 10px;
  }
`;
