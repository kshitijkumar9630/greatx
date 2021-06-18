import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Sliders = () => {
	return (
		<div>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={true}
				interval={5000}
				bullets={false}
			>
				<div data-src={image1} />
				<div data-src={image2} />
				<div data-src={image3} />
				<div data-src={image4} />
				<div data-src={image5} />
			</AutoplaySlider>
		</div>
	);
};

export default Sliders;
