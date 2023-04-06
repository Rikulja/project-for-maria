import { useEffect, useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);
  return (
    <FooterStyled>
      © {date} - All rights reserved
      <div>
        <a
          href="https://www.flaticon.com/free-icons/ampoul"
          title="Ampoul icons"
        >
          Ampoule icons created by Freepik - Flaticon
        </a>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: #eeeff2;
  border-top: 5px solid #0a0a0a33;
  color: #16ceb5;
  font-style: italic;
  text-align: center;
  padding: 10px;
`;

export default Footer;
