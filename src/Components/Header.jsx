import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar />
            <div className="name">
                <h1>Unleash the power of pet care with confidence.<br /><br /><span>Download our app today!</span></h1>

                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam, consequuntur cupiditate esse, delectus officia suscipit consequatur vitae sequi voluptatibus eveniet aliquam et. Voluptatem sint nemo corporis eveniet soluta sequi.</p>
                <a href="#" className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header
