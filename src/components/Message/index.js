import React from 'react'
import { MessageWrapper, MessageForm } from './MessageStyle'

function Messages() {
    return (
        <>
            <MessageWrapper>

            <h1 data-aos='zoom-in'>Get your business done !</h1>

                <MessageForm data-aos='slide-up'>
                    <form action="">
                        <div className="fullname">
                            <div className="fname">
                                <label htmlFor="fname">First name*</label> <br />
                                <input type="text" name="fname" placeholder='John' />
                            </div>

                            <div className="lname">
                                <label htmlFor="lname">Last name*</label> <br />
                                <input type="text" name="lname" placeholder='Doe' />
                            </div>
                        </div>


                        <div className="details">
                            <label htmlFor="email">Email*</label>
                            <input type="email" name="email" placeholder='johndoe@gmail.com' />

                            <label htmlFor="number">Phone Number*</label>
                            <input type="number" name="number" placeholder='e.g. 6393-030-0943' />

                            <label htmlFor="service">Service Needed*</label>
                            <select name="service">
                                <option value="Brand Logo">Brand Logo</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Branding">Branding</option>
                                <option value="Customized System">Customized System</option>
                            </select>

                            <label htmlFor="message">Tell Us More About your business</label>
                            <textarea name="message" cols="30" rows="8" placeholder='My business is about this and I need help with that...'></textarea>
                        </div>

                        <div className="send">
                            <button>Send Message</button>
                        </div>

                    </form>    
                </MessageForm>    
            </MessageWrapper>  
        </>
    )
}

export default Messages
