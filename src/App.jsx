import Router from "./routes/routes.jsx";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
