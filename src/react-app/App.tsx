import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { PostDetail } from './pages/PostDetail';
import { About } from './pages/About';
import { Tags } from './pages/Tags';
import { TagPosts } from './pages/TagPosts';
import { NotFound } from './pages/NotFound';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:tag" element={<TagPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
