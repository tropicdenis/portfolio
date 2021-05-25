import React from "react"
import './App.scss';
import Header from "./header/Header";
import Main from "./Main/Main";
import Skills from "./skils/Skills";
import MyWorks from "./my_works/MyWorks";
import Footer from "./footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
