import React from 'react'
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';


function Feature() {
    return (
        <div id='features'>
            <div className="a-container">
                <FeatureBox image={featureimage1} title="Veterinary Services" desc="We are committed to providing compassionate and comprehensive care for pets." />
                <FeatureBox image={featureimage2} title="Pet Mating Services" desc="We offer a range of services that cater to all your pet mating needs, breeding management." />
                <FeatureBox image={featureimage3} title="Pet Marketplace" desc="Connects pet lovers with reputable breeders and sellers across the country." />
            </div>
        </div>
    )
}

export default Feature
