import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Feed from "./components/Feed";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
