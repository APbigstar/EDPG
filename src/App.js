import { useState, useEffect } from "react";
import Header from "./components/common/header/Header";
import { useLocation, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import ScrollButton from "./components/scrollbtn/ScrollButton";
import LoginPage from "./components/auth/pages/LoginPage";
import SignupPage from "./components/auth/pages/SignupPage";
import "./App.css";

function App() {
  const location = useLocation();
  const [isSignIn, setIsSignIn] = useState(false);
  useEffect(() => {
    if (
      location.pathname.includes("signin") ||
      location.pathname.includes("signup")
    ) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, [location.pathname]);
  return (
    <>
      {!isSignIn && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/journal" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
      {!isSignIn && (
        <>
          <Footer />
          <ScrollButton />
        </>
      )}
    </>
  );
}

export default App;
