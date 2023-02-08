import { Form } from "react-router-dom";
import { useRedirectIfNecessary } from "storage";
import styled from "styled-components";

export default function Decision() {
  useRedirectIfNecessary();
  return (
    <Form method="post">
      <StyledDecision>
        <div className="buttons">
          <button type="submit" name="finish">
            <b> Finish/Print</b>
          </button>
          <button type="submit" name="new">
            <b> Next Ampoule</b>
          </button>
        </div>
      </StyledDecision>
    </Form>
  );
}

const StyledDecision = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
  align-items: center;
  .buttons {
    margin-top: 5rem;
    button {
      width: 20vh;
      margin: 2rem 4rem;
    }
  }
`;
