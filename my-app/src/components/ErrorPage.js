import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <Error>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <h3>{error.status}</h3>
          <i>{error.statusText || error.message}</i>
        </p>
      </Error>
    </div>
  );
}

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 3rem;

  h1 {
    color: #2c3639;
    font-size: 5rem;
  }
  h3 {
    text-shadow: -1px 0px 0px #d73851, 1px 0px 0px #d73851, 0px -1px 0px #d73851,
      0px 1px 0px #d73851;
  }
  p {
    color: #2c3639;
    font-size: 3rem;
  }
  i {
    color: #d73851;
    font-size: 2rem;
  }
`;
