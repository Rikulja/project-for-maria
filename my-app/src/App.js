import FormPage from "./components/FormPage";
import AmpoulePage from "./components/AmpoulePage";
import CountdownPage from "./components/CountdownPage";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path="/" exact element={<FormPage />}></Route>
        <Route path="/ampoule-vertical" exact element={<AmpoulePage />}></Route>
        <Route
          path="/countdown-vertical"
          exact
          element={<CountdownPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
