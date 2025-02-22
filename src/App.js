import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/course/:id' component={CourseDetail} />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/OnlineCourses' component={AllCourses} />
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
