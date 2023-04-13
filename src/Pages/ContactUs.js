import './../App.css';
import './../contactUs.css';
import { useState } from "react";



function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your email, ${email}!`);
    setEmail("");
    setSubject("");
    setTextarea("");
  }

  const [textarea, setTextarea] = useState(

  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Your Email address:
        <input 
          type="text"
          required  
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br></br>
      <br></br>
      <label>Enter your Subject:
        <input 
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>

      <br></br>
      <br></br>
      <textarea 
      required 
      value={textarea} 
      placeholder="Type your message here..."
      onChange={handleChange} />
      
      <br></br>
      <input type="submit" />
    </form>
  )
}

function Contact() {
    return (
      // Code for the App
      
      <div className="App-header">
          <MyForm />
      </div>
    );
  }


export default Contact;
