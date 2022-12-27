import FormPage from "./components/FormPage";
import AmpoulePage from "./components/AmpoulePage";
import CountdownPage from "./components/CountdownPage";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import routes
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" exact element={<FormPage />}></Route>
      <Route path="/ampoule-vertical" exact element={<AmpoulePage />}></Route>
      <Route
        path="/countdown-vertical"
        exact
        element={<CountdownPage />}
      ></Route>
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
