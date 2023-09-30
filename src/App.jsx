import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/SearchDiv/Search';
import Job from './Components/JobDiv/Job';
import Value from './Components/ValueDiv/Value';
import Footer from './Components/FooterDiv/Footer';
const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer />
    </div>
  )
}

export default App
