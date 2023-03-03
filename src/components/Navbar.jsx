import React, {useState} from 'react'
import iconMenu from "../images/icon-menu.svg"
import logo from "../images/logo.svg"
/* import iconClose from "../images/icon-menu-close.svg" */


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click)
  }

  return (
          <>

          {!click ? 
            <nav className="navbar navbar-expand-md fixed-top">
              <div className="container section-container-navbar">
                <a className="navbar-brand logo-1 " href="#">
                  <img  src={logo} alt="logo"/>
                </a>
                <button onClick={handleClick} className="menu-open"> </button>
                <div className=" collapse   navbar-collapse" >
                  <div className="navbar-nav menu ms-auto">
                    <a className="nav-link " aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">New</a>
                    <a className="nav-link" href="#">Popular</a>
                    <a className="nav-link" href="#">Trending</a>
                    <a className="nav-link" href="#">Categories </a>
                  </div>
              </div>
            </div>
          </nav>
            
            : 
            <div className='container '>
               <div className='row '>
               <a className="navbar-brand logo-2" href="#">
                  <img src={logo} alt="logo"/>
                </a>
                <div onClick={handleClick} className=' transparent '> 
                </div>
                 <nav className='nav-menu' >
                  <button onClick={handleClick} className="menu-close" ></button>
                  <ul className="menu ">
                    <li><a href="_blank">Home</a></li>
                    <li><a href="_blank">New</a></li>
                    <li><a href="_blank">Popular</a></li>
                    <li><a href="_blank">Trending </a></li>
                    <li><a href="_blank">Categories </a></li>
                  </ul>
                </nav> 

               </div>
            </div>

          }
          
         
          </>

    )
  }
  
  export default Navbar


/*   <div className='container '>
               <div className='row  '>
               <a className="navbar-brand" href="#">
                  <img src={logo} alt="logo"/>
                </a>
                <div className=' transparent '> 
                </div>
                 <nav className='nav-menu' >
                  <button onClick={handleClick} className=" menu-close" ></button>
                  <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav> 

               </div>
            </div>  */




  {/*  <nav>
              <a href="#" className="logo">Your Logo</a>
                <ul className="menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                   <li><a href="#">Contact</a></li>
                </ul>
                <button className="menu-toggle"></button>
              </nav> */}