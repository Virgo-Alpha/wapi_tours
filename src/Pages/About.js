import './../App.css';
import './../about.css'
import Myself from '../Assets/Myself.jpeg'  

function About() {
  return (
    // Code for the App
    
    <div className="App-header">
        <h1>
          Our Founder
        </h1>
        <article id="Founder">
            
            <div className="flex-container">
            <div><img id="me" src={Myself} alt="me face"></img>

            </div>
            <div>
                <p>
                We were founded by Benson Mugure, a student techpreneur and developer who was recently awarded the Times 100 most Influential people. He is a proficient computer scientist having worked on different <a href="https://github.com/Virgo-Alpha" target="_blank" rel="noreferrer">projects</a>.
                <br></br>
                <br></br>
                Feel free to reach out to him at:
                <br></br>
                <br></br>
                Email: <a href="mailto:b.mugure@alustudent.com">b.mugure@alustudent.com</a>
                <br></br>
                <br></br>
                Instagram: <a href="https://www.instagram.com/vybz_kan_tell/" target="_blank" rel="noreferrer">Vybz_kan_tell</a>
                
            </p>
        </div>
        </div>
        </article>
        </div>
  );
}

export default About;
