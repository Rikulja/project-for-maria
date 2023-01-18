import FormPage from "./components/FormPage";
import AmpoulePage from "./components/AmpoulePage";
import CountdownPage from "./components/CountdownPage";
import TemporaryStorage from "./components/TemporaryStorage";
import AmpouleTypesPage from "components/AmpouleTypesPage";
import ErrorPage from "components/ErrorPage";
import ParentComponent from "components/ParentComponent";
import Decision from "components/Decision";
import FormulaPage from "components/FormulaPage";
import PrintPage from "components/PrintPage";
import ReportPage from "components/ReportPage";
import NavBar from "components/NavBar";
import ampoules from "./images/ampoules.jpg";

//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import routes
import {
  submitPage,
  loadValues,
  startCountdown,
  nextDirection,
  submitTypes,
  submitDecision,
  submitFormula,
} from "./storage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ParentComponent />} path="/" errorElement={<ErrorPage />}>
      <Route
        index
        exact
        action={submitPage}
        loader={loadValues}
        element={<FormPage />}
      ></Route>
      <Route
        path="temporary"
        loader={loadValues}
        element={<TemporaryStorage />}
      ></Route>
      <Route path="report" loader={loadValues} element={<ReportPage />}></Route>
      <Route
        path="ampoule/:direction"
        action={startCountdown}
        loader={loadValues}
        element={<AmpoulePage />}
      ></Route>

      <Route
        path="countdown/:direction"
        action={nextDirection}
        loader={loadValues}
        element={<CountdownPage />}
      ></Route>
      <Route
        action={submitTypes}
        path="ampoule-types"
        loader={loadValues}
        element={<AmpouleTypesPage />}
      ></Route>
      <Route
        path="decision"
        action={submitDecision}
        loader={loadValues}
        element={<Decision />}
      ></Route>
      <Route
        loader={loadValues}
        action={submitFormula}
        path="formula"
        element={<FormulaPage />}
      ></Route>
      <Route path="print" loader={loadValues} element={<PrintPage />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <div className="app-bg" style={{ backgroundImage: `url(${ampoules})` }}>
        <NavBar />
        <GlobalStyle />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
