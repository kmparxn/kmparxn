import {Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import {lightTheme} from "./components/Themes";
import Main from "./components/Main";
import Blogpage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";



function App() {
  return (
    <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

      <Routes>
        <Route  index element={<Main />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/blog" element={<Blogpage />} />
        <Route  path="/work" element={<WorkPage />} />
        <Route  path="/skills" element={<MySkillsPage />} />
      </Routes>

    </ThemeProvider> 
    </>
  );
}

export default App;

