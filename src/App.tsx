import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Tech from './pages/tech';
import Form from './components/form';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tech stack" element={<Tech />} />
        <Route path="/contact form" element={<Form/>}/>
    </Routes>
  )
}
export default App
