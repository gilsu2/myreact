import { createGlobalStyle } from "styled-components";
import Menu from "./Components/3.Props/Menu";
import BasicRouter from "./Components/4.Router/BasicRouter";
import ReactRouter from "./Components/4.Router/ReactRouter";
import SendAPI from "./Components/2.Effect/SendAPI";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;



function App() {
  return (
    <div>
      <GlobalStyle />
      <SendAPI />
    </div>
  );
}

export default App; 
