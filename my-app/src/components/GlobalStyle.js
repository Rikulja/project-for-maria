import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body{
    font-family: "Roboto", sans-serif;
    color: #282d2f;
    font-weight:700;
}
.app-bg{
  min-height: 100vh;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  overflow-y: auto;
}
.container{
    height:90vh;
    background-color: #4c922691;
    padding: 5rem 3rem;
    font-size: 150%;
    width: 70%;
    min-width: 200px;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 55%;
    border-radius: 2px;
    overflow:hidden;
    overflow-y:auto
}

button {
    /* position: absolute;
    margin-top: 1rem; */
    cursor:pointer;
    font-size:1rem;
    left: 50%;
    text-align:center;
    width:13vh;
    margin-top:5rem ;
    padding: 0.5rem 1.5rem;
    background-color: #3b3939;
    border: 2px solid #ddd;
    color: white;
    transition:all 0.5s ease-in-out;
    &:hover {
      border: 2px solid #d73851;
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
  .wrapper{

  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;

  }

`;

export default GlobalStyle;
