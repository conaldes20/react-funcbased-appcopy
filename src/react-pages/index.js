//index.js:
import React from 'react';
import About from '../components/About'
import TodoContainer from '../components/TodoContainer'
//import Footer from '../components/Footer'

import "../App.css";
//import '../components/Footer.css'
  
const Home = () => {
  return (
    <main>
       <div
          style={{
            display: 'flex',
            justifyContent: 'Center',
            alignItems: 'Center',
            height: '100vh'
          }} >
         <h1>Welcome to GeeksforGeeks</h1>
       </div>
       <About/>
       <TodoContainer/>
    </main>
  );
};
  
export default Home;

