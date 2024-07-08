import { Box } from "@mui/material";
import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./Pages/Test";
import { Clients } from "./Pages/Clients/Clients";
import { Projects } from "./Pages/Projects/Projects";
import { AddLeads } from "./Pages/Leads/AddLeads";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box display={"flex"}>
          <Box maxWidth={"250px"} >
            <Sidebar />
          </Box>
          <Box minHeight={"100vh"} bgcolor={"#e4e4e4"} width={"100%"}>
            <Routes>
              <Route path='/clients' element={<Clients />} />
              <Route path="/project/add" element={<Projects />} />
              <Route path="/leads/add" element={<AddLeads />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
