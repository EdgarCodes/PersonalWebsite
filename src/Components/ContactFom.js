import React from 'react';
import UseFormState from "../Hooks/UseFormState";


export default function ContactFom() {
    const [name, handleNameChange, resetName] = UseFormState("");
    const [email, handleEmailChange, resetEmail] = UseFormState("");
    const [message, handleMessageChange, resetMessage] = UseFormState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, message);

        resetName();
        resetMessage();
        resetEmail();
    }


    return (
        <div className = "Form">
            <div className = "info-1-title" style = {{paddingTop: "0", textAlign: "center"}}>
                <h1 style = {{color:"white"}}>Contact Me!</h1>
                <div className = "divider" style = {{backgroundColor: "White", width: "100px", margin: "auto"}}/>
            </div>
            <form onSubmit = {handleSubmit} className = "ContactForm">
                <input
                type="text"
                value={name}
                placeholder="Name"
                className = "ContactForm-input"
                onChange={handleNameChange}
                ></input>

                <input
                type="text"
                value={email}
                placeholder="Email"
                className = "ContactForm-input"
                onChange={handleEmailChange}
                ></input>

                <textarea
                type="text"
                value={message}
                placeholder="Message"
                className = "ContactForm-input large"
                onChange={handleMessageChange}
                ></textarea>


                <button className = "ContactForm-btn">Submit</button>    
            </form>
        </div>
    )
}
