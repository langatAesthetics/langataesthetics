import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Tech from './pages/tech';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tech stack" element={<Tech />} />
    </Routes>
  )
}
export default App
