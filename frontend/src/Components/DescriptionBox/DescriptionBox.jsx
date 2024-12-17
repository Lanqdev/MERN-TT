import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>
                    Description
                </div>
                <div className='descriptionbox-nav-box fade'>
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox
