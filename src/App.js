import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
//import Project from './components/pages/Project'*

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass = "min-height"> 
          <Route exact path = "/">
              <Home/>
          </Route>
          <Route exact path = "/projects">
              <Projects/>
          </Route>
          <Route exact path = "/company">
              <Company/>
          </Route>
          <Route exact path = "/Contact">
              <Contact/>
          </Route>
          <Route exact path = "/newproject">
              <NewProject/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
