import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardDetailsDrink } from "./components/CardDetailsDrink";
import { DrinkContext, DrinkProvider } from "./core/contextApi/DrinkContext";
import { Home } from "./pages/Home";
import { NotFound404 } from "./pages/NotFound404";

function App() {
  return (
    <>
      <DrinkProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="drinks/:id" element={<CardDetailsDrink />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </DrinkProvider>
    </>
  );
}

export default App;
