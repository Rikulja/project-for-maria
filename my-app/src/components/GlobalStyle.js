import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body{
    height: 100vh;
    font-family: "Roboto", sans-serif;
    color: #2c3639;
}

.container{
    background-color: #76ba99;
    padding: 7rem 3rem;
    font-size: 150%;
    width: 80%;
    min-width: 200px;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 2px;
}
button {
    /* position: absolute;
    margin-top: 1rem; */
    cursor:pointer;
    left: 50%;
    text-align:center;
    width:10vh;
    margin-top:5rem ;
    padding: 0.5rem 2rem;
    background-color: #344d67;
    border: 1px solid #ddd;
    color: white;
    &:hover {
      background: royalblue;
      border: 1px solid #d73851;
      color: #fff;
    }
    &:disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
    /* pointer-events: none; */
    cursor :not-allowed;
    
}
  }

h1{
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 1.5rem;
}
    h2{
  text-align: center;
  margin: 0 0 1.5rem;
    }
    h3, 
    h4{
    text-align: center;
    font-weight: 700;
    margin: 0 0 1.5rem;
    }
    h4{
      color:#d73851;
      font-style:italic
    }
  
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
   a{ color: #fff;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.9;
   }
   ul,
  nav {
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyle;
