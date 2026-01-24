import './App.css';
import Header from './components/common/header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import CourseDetail from '../src/components/DetailPage/CourseDetail';
import AllCourses from './components/DetailPage/AllCourses';
import PrivacyPolicy from './components/legal/PrivacyContainter';
import StudentIDEntry from './components/student/StudentIDEntry';
import Results from './components/results/Results';
import ScholarshipPolicy from './components/scholarship/ScholarshipPolicy';
import ScholarshipResult from './components/results/ScholarshipResult';
import ScholarshipResultView from './components/results/ScholarshipResultView';
import ScholarshipClosed from './components/scholarship/ScholarshipClosed';

const AppLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/scholarship-result/view';

  return (
    <>
      <Header />
      <Routes>
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/OnlineCourses' element={<AllCourses />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/courses' element={<CourseHome />} />
        <Route path='/team' element={<Team />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/journal' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/student-id-entry' element={<StudentIDEntry />} />
        <Route path='/results' element={<Results />} />
        <Route path='/scholarship-policy' element={<ScholarshipPolicy />} />
        <Route path='/scholarship-result' element={<ScholarshipResult />} />
        <Route path='/scholarship-result/view' element={<ScholarshipResultView />} />
        <Route path='/scholarship' element={<ScholarshipClosed />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
