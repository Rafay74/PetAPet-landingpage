import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2> {props.title}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sit soluta a animi mollitia non quae quidem labore eum repellat iste doloremque voluptate reprehenderit, molestias fugiat iure natus maiores consectetur.</p>
                <button className='cv-btn'>{props.button}</button>
            </div>

        </div>
    )
}

export default About
