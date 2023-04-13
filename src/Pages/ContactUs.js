import './../App.css';
import { useState } from "react";



function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your email, ${email}!`);
  }

  const [textarea, setTextarea] = useState(
    "Type your message here..."
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <br></br>
      <label>Enter your Subject:
        <input 
          type="text" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <br></br>
      <textarea value={textarea} onChange={handleChange} />
      
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
