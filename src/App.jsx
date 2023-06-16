import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/layout";
import { Home } from "./Components/Home";
import { Table } from "./Components/Table";
import { Search } from "./Components/Seachbox/Search";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/layout" element={<Layout />}/>
      <Route path="/table" element={<Table />} />
      <Route path="/searchbar" element={<Search />}/>
    </Routes>
    </>
  );
}

export default App;
