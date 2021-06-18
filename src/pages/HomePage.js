import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Sliders from '../components/Sliders';
//image imports
import Map from '../assets/images/map.jpg';
import Room from '../assets/images/room.jpg';
//icon imports
import Correct from '../assets/icons/correct.gif';

export class HomePage extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col
							xs={12}
							md={12}
							sm={12}
							xl={6}
							style={{ margin: '0', padding: '0 ' }}
						>
							<div
								style={{
									height: '100%',
									padding: '170px 0',

									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<div>
									<h1
										style={{
											fontSize: 'calc(1.5rem + 0.1vw)',
											margin: '0',
											padding: '0 ',
											fontFamily: "'Playfair Display', serif",
											fontWeight: '500',
											color: 'black',
										}}
									>
										Digital asset backed by
									</h1>

									<h1
										style={{
											fontSize: 'calc(3rem + 0.3vw)',
											marginTop: '-10px',
											padding: '0 ',
											fontFamily: "'Playfair Display', serif",
											fontWeight: '700',
											color: 'black',
										}}
									>
										Hotel room
									</h1>

									<h1
										style={{
											fontSize: 'calc(4rem + 0.3vw)',
											marginTop: '-25px',
											padding: '0 ',
											fontFamily: "'Playfair Display', serif",
											fontWeight: '700',
											color: 'black',
										}}
									>
										ownership
									</h1>
									<p
										style={{
											fontSize: 'calc(1rem + 0.1vw)',

											padding: '0 ',
										}}
									>
										Fulfilling your Aspirations of owning-Long <br />
										term return yeilding asset.
									</p>
								</div>
							</div>
						</Col>
						<Col
							xs={12}
							md={12}
							sm={12}
							xl={6}
							style={{ margin: '0', padding: '0 ' }}
						>
							<Sliders />
						</Col>
					</Row>
					<Row>
						<Col className="text-center p-5 ">
							<h5>
								Want to participate at owning a room at Hilton. Holiday INN,
								Hayyat, Marriott?
								<br />
								Choose and own your room from the 50 hottest and most preffered
								investment location across the
								<br />
								United States.
							</h5>
						</Col>
					</Row>
					<Row>
						<Col className="text-center ">
							<img src={Map} className="img-fluid" />
						</Col>
					</Row>
					<div className="text-center">
						<a href="https://growthcalculator.graterx.com/">
							Growth Calculator
						</a>
					</div>
					<Row>
						<Col
							xs={12}
							md={12}
							sm={12}
							xl={6}
							style={{
								padding: '0',
								margin: '0',
							}}
						>
							<div
								style={{
									padding: '10% 20%',

									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<div>
									<h5>
										North America is the largest consumer market of luxary
										hotels with a market share of 32.05%.
									</h5>
									<h5>
										The number of available rooms in U.S. hotels is over 5
										million according to STR.
									</h5>
								</div>
							</div>
						</Col>
						<Col
							xs={12}
							md={12}
							sm={12}
							xl={6}
							style={{
								padding: '0',
								margin: '0',
							}}
						>
							<div
								style={{
									padding: '10% 20%',

									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<div>
									<h5>
										<img src={Correct} style={{ height: '40px' }} />
										&nbsp; No legal or fiduciary obligations.
									</h5>
									<h5>
										<img src={Correct} style={{ height: '40px' }} />
										&nbsp; No tax or insurance impications.
									</h5>
									<h5>
										<img src={Correct} style={{ height: '40px' }} />
										&nbsp; No maintainance and management responsibilities.
									</h5>
								</div>
							</div>
						</Col>
					</Row>
					<div className="text-center">
						<img src={Room} className="img-fluid" />
					</div>
				</Container>
				{/* <Container>
					<div className="mt-5">
						<Row>
							<Col
								xs={12}
								sm={12}
								md={3}
								xl={3}
								className="m-0 p-0"
								style={{
									display: 'flex',

									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div
									className="text-center p-5"
									style={{
										clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
										background: 'orange',
									}}
								>
									<h2
										style={{
											fontFamily: "'Playfair Display', serif",
											fontWeight: '500',
										}}
									>
										Here is your starting point
									</h2>
								</div>
							</Col>
							<Col
								xs={12}
								sm={12}
								md={3}
								xl={3}
								className="m-0 p-0"
								style={{
									background: 'orange',
									display: 'flex',

									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div className="text-center p-4">
									<h2
										style={{
											fontFamily: "'Playfair Display', serif",
											fontWeight: '500',
										}}
									>
										Smart Securities Ownership
									</h2>
								</div>
							</Col>
							<Col
								xs={12}
								sm={12}
								md={3}
								xl={3}
								className="m-0 p-0"
								style={{
									background: 'orange',
									display: 'flex',

									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div className="text-center p-4">
									<h2
										style={{
											fontFamily: "'Playfair Display', serif",
											fontWeight: '500',
										}}
									>
										We Have skin in the Game
									</h2>
								</div>
							</Col>
							<Col
								xs={12}
								sm={12}
								md={3}
								xl={3}
								className="m-0 p-0"
								style={{
									background: 'orange',
									display: 'flex',

									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div className="text-center p-4">
									<h2
										style={{
											fontFamily: "'Playfair Display', serif",
											fontWeight: '500',
											color: 'whitesmoke',
										}}
									>
										Set Your Goals
										<br /> &amp; Fulfill
										<br /> Your Aspirations
									</h2>
								</div>
							</Col>
						</Row>
					</div>
				</Container> */}
			</div>
		);
	}
}

export default HomePage;
