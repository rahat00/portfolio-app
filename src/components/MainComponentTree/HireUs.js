import React from 'react'
import { useForm } from '@formspree/react';
import "../../App.css"

function HireUs() {


  const [state, handleSubmit] = useForm("xjvjpgdn");
  if (state.succeeded) {
      return <p>thanks for joining us!</p>;
  }
    return (
        <div className="hire">
            <div className="hire-image">
                <div className="hire-img">
                    <img src="../images/hire.png" alt="hireus-image" />
                </div>
            </div>

            <form className="hire-wholefield" onSubmit={handleSubmit}>
                <div className="hire-field">
                    <label className="hire-hireus">Hire Us</label>
                    <div className="hire-inputfield">
                        <div className="hire-inputfield-div">
                            <label>Your Name*</label>
                            <input type="text" name="name" placeholder=" Inter your name" required />
                        </div>
                        <div className="hire-inputfield-div">
                            <label>Your Email*</label>
                            <input type="email" name="email" placeholder=" Inter your email" required />
                        </div>
                        <div className="hire-inputfield-div">
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder=" subject" />
                        </div>
                    </div>
                    <div className="hire-message">
                        <div className="hire-msg">
                            <label >Message*</label>
                            <textarea className="hire-msg-area" type="textarea" name="message" placeholder="type your message here" required />
                        </div>

                    </div>
                        <input className="hire-send" type="submit" name="button" value="SEND" disabled={state.submitting} />
                        <p>{state.succeeded ? <p>thanks for joining us!</p> : <p>something want wrong!</p> }</p> 
                    
                </div>
            </form>
        </div>
    )
}

export default HireUs
