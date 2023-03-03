import Cards from "./components/Cards"
import React, { useState } from 'react';
import "./style/App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [data, setData] = useState([
    { id : "01", 
      title: "Reviving Retro PCs",
      comment : "What happens when old PCs are given modern upgrades?",
      section : " retro box  img-fluid ",
    },
    { id : "02", 
      title: "Top 10 Laptops of 2022",
      comment : "Our best picks for various needs and budgets.",
      section : " laptop box img-fluid ",
    },
    { id : "03", 
      title: "The Growth of Gaming",
      comment : "How the pandemic has sparked fresh opportunities.",
      section : "gaming box img-fluid ",
    },
  ]);

  return (
    <>
      <Navbar/>
      <Cards  data={data}/>
      <Footer/>
    </>
  )
}

export default App
