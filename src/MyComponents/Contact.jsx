import React from 'react'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="email">
                <span>Email me at:</span><a href="mailto:harsh@harshbansal.in" className="emailid"> <span className="icon email"><i className='bx bx-envelope'></i></span><span>harsh@harshbansal.in</span></a>
            </div>
            <div className="social">
                <span>Find me on:</span>
                <span className="social-icons">
                    <a target='_blank' rel="noreferrer" href="https://github.com/harshbansal8705" className='icon-parent firacode'><span className="icon github"><i className='bx bxl-github'></i></span><span className='social-username'>/harshbansal8705</span></a>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/harshbansal8705" className='icon-parent firacode'><span className="icon linkedin"><i className='bx bxl-linkedin'></i></span><span className='social-username'>/in/harshbansal8705</span></a>
                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/harsh8705" className='icon-parent firacode'><span className="icon facebook"><i className='bx bxl-facebook'></i></span><span className='social-username'>/harsh8705</span></a>
                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/harshbansal8705" className='icon-parent firacode'><span className="icon instagram"><i className='bx bxl-instagram'></i></span><span className='social-username'>/harshbansal8705</span></a>
                </span>
            </div>
        </section>
    )
}
