import React, { useState } from 'react';
import UseFormState from "../Hooks/UseFormState";

//If form doesnt work then remove the html in index and delete encode and fetch
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


export default function ContactFom() {
    const [name, handleNameChange, resetName] = UseFormState("");
    const [email, handleEmailChange, resetEmail] = UseFormState("");
    const [message, handleMessageChange, resetMessage] = UseFormState("");
    const [warning, setWarning] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, message);

        if(name === "" || email === "" || message === "")
        {
            setWarning("Please Enter All Fields")
            return;
        }

        if(!isNaN(name))
        {
            setWarning("Please enter a valid name");
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message })
          })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        resetName();
        resetMessage();
        resetEmail();
        setWarning("");
    }


    return (
        <div className = "Form">
            <div className = "info-1-title" style = {{paddingTop: "0", textAlign: "center"}}>
                <h1 style = {{color:"white"}}>Contact Me!</h1>
                <div className = "divider" style = {{backgroundColor: "White", width: "100px", margin: "auto"}}/>
            </div>
            <form onSubmit = {handleSubmit} 
            className = "ContactForm"
            method ="POST" 
            data-netlify="true"
            name="contact">
                <input
                type="text"
                value={name}
                placeholder="Name"
                className = "ContactForm-input"
                aria-label = "Name"
                onChange={handleNameChange}
                minLength= "4"
                ></input>

                <input
                type="email"
                value={email}
                placeholder="Email"
                className = "ContactForm-input"
                aria-label = "Email"
                onChange={handleEmailChange}
                minLength= "5"
                ></input>

                <textarea
                type="text"
                value={message}
                placeholder="Message"
                className = "ContactForm-input large"
                aria-label = "Message"
                onChange={handleMessageChange}
                minLength= "10"
                ></textarea>


                <button className = "ContactForm-btn">Submit</button>    
            </form>

            <div style = {{paddingBottom: "1rem", color: "red"}}>{warning}</div>
        </div>
    )
}
