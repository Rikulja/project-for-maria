import FormPage from "./components/FormPage";
import AmpoulePage from "./components/AmpoulePage";
import CountdownPage from "./components/CountdownPage";
import TemporaryStorage from "./components/TemporaryStorage";
import AmpouleTypesPage from "components/AmpouleTypesPage";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import routes
import { submitPage, loadValues, startCountdown } from "./storage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" exact action={submitPage} element={<FormPage />}></Route>
      <Route
        path="/temporary"
        loader={loadValues}
        element={<TemporaryStorage />}
      ></Route>
      <Route
        path="/ampoule-vertical"
        action={startCountdown}
        exact
        element={<AmpoulePage />}
      ></Route>
      <Route
        path="/countdown-vertical"
        loader={loadValues}
        exact
        element={<CountdownPage />}
      ></Route>
      <Route path="/ampoule-types" element={<AmpouleTypesPage />}></Route>
    </>
  )
);

function App() {
  return (
    <div>
      <GlobalStyle />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
