import React from "react";
import "./css/contact.css"

export default function Contact(){
    return(
        <>
            <h1>Contact me</h1>

            <div id="form_holder">
                <div id="form">
                    <h2>Send a message!</h2>
                
                    <form target="_blank" action="https://formsubmit.co/48948502f7102889a4911f12ab0a0a90" method="POST">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"id="firstName"name="First Name:" required />

                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"id="lastName"name="lastName" required />

                        <label htmlFor="email">Email</label>
                        <input type="email"id="email"name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="10" cols="35" required></textarea>
                        
                        
                        <button type="submit" id="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}