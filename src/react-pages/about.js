//about.js:
import React from 'react';
import '../components/Welcome.css'
  
const About = () => {
  return (
    <>
    <section className="about">
       <p className="welcome--about">
          In many modern websites, you must have seen this effect of Navigation bar/ Header sticking to the top 
	  of the page even if you scroll down the page for your better navigation so you don’t have to go up always 
	  to choose between links for moving between the pages. Haven’t you?
          If you have and are curious about how does that work, then this post is your go-to guide to create that 
	  very simple yet beautiful effect/feature for you next project which adds better UX to the page.
        </p>
    </section>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
    </div>    
    </>
  );
};
  
export default About;