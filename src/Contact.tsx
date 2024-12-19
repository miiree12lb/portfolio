import React from "react";
import "./css/contact.css"

export default function Contact(){
    return(
        <>
            <div id="form_holder">
                <div id="form">
                    <h2>Contact Me!</h2>
                
                    <form target="_blank" rel="noopener noreferrer" action="https://formspree.io/f/mldeqdjb" method="POST">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"id="firstName"name="First Name" required />

                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"id="lastName"name="Last Name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email"id="email"name="Email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="Message" rows="10" cols="35" required></textarea>
                        
                        
                        <button type="submit" id="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}