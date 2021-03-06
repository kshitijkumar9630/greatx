import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
//page imports
import HomePage from './pages/HomePage';

//icon imports
import Telegram from './assets/icons/telegram.gif';
import Facebook from './assets/icons/facebook.gif';
import Twitter from './assets/icons/twitter.gif';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	handleMenuClick() {
		this.setState({ menuOpen: !this.state.menuOpen });
	}

	handleLinkClick() {
		this.setState({ menuOpen: false });
	}

	render() {
		const styles = {
			container: {
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: '1',
				// opacity: 0.9,
				display: 'flex',
				alignItems: 'center',
				background: '#263238',
				width: '100%',
				color: 'white',
				padding: '1rem',
			},
			logo: {
				margin: '0 auto',
			},
			body: {
				paddingTop: '4rem',
				width: '100%',
				height: '100%',
				filter: this.state.menuOpen ? 'blur(2px)' : null,
				transition: 'filter 0.5s ease',
			},
		};
		const menu = ['About Us', 'Our Products', 'Services', 'FAQ', 'Contact Us'];
		const menuItems = menu.map((val, index) => {
			return (
				<MenuItem
					key={index}
					delay={`${index * 0.1}s`}
					onClick={() => {
						this.handleLinkClick();
					}}
				>
					{val}
				</MenuItem>
			);
		});

		return (
			<div>
				<div style={styles.container}>
					<div style={styles.logo}>
						<div
							style={{
								margin: '0px 50px 0 120px',
								fontSize: 'calc(0.5rem + 0.3vw)',
							}}
						>
							<h6 style={{ color: 'white' }}>
								PRINCIPAL PROCTED. &nbsp;ASSETS BACKED. &nbsp;SMART SECURITIES.{' '}
							</h6>
						</div>
					</div>
					<MenuButton
						open={this.state.menuOpen}
						onClick={() => this.handleMenuClick()}
						color="white"
					/>
				</div>
				<Menu open={this.state.menuOpen}>{menuItems}</Menu>
				<div
					style={{
						position: 'absolute',
						height: '150px',
						width: '100px',
						background: '#e5b574',
						zIndex: '2',
						marginTop: '20px',
						marginLeft: '5%',
					}}
				>
					GreatX
				</div>
				<div style={styles.body}>
					<HomePage />
					<Footer name="Menu" />
				</div>
			</div>
		);
	}
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		};
	}

	handleHover() {
		this.setState({ hover: !this.state.hover });
	}

	render() {
		const styles = {
			container: {
				opacity: 0,
				animation: '1s appear forwards',
				animationDelay: this.props.delay,
			},
			menuItem: {
				fontSize: '1rem',
				textAlign: 'center',
				padding: '1rem 0',
				margin: '0 5%',
				cursor: 'pointer',
				color: this.state.hover ? 'grey' : '#fafafa',
				transition: 'color 0.2s ease-in-out',
				animation: '0.5s slideIn forwards',
				animationDelay: this.props.delay,
			},
		};
		return (
			<div style={styles.container}>
				<div
					style={styles.menuItem}
					onMouseEnter={() => {
						this.handleHover();
					}}
					onMouseLeave={() => {
						this.handleHover();
					}}
					onClick={this.props.onClick}
				>
					{this.props.children}
				</div>
				<div style={styles.line} />
			</div>
		);
	}
}

/* Menu.jsx */
class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open ? this.props.open : false,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open });
		}
	}

	render() {
		const styles = {
			container: {
				position: 'absolute',
				top: '4rem',
				left: 0,
				height: this.state.open ? '50%' : 0,
				width: '100vw',
				display: 'flex',
				flexDirection: 'column',
				background: '#263238',
				opacity: 0.95,
				color: '#fafafa',
				transition: 'height 0.5s ease',
				zIndex: 2,
			},
			menuList: {
				paddingTop: '3rem',
			},
		};
		return (
			<div style={styles.container}>
				{this.state.open ? (
					<div style={styles.menuList}>{this.props.children}</div>
				) : null}
			</div>
		);
	}
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open ? this.props.open : false,
			color: this.props.color ? this.props.color : 'black',
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open });
		}
	}

	handleClick() {
		this.setState({ open: !this.state.open });
	}

	render() {
		const styles = {
			container: {
				height: '32px',
				width: '32px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				padding: '4px',
			},
			line: {
				height: '2px',
				width: '20px',
				background: this.state.color,
				transition: 'all 0.2s ease',
			},
			lineTop: {
				transform: this.state.open ? 'rotate(45deg)' : 'none',
				transformOrigin: 'top left',
				marginBottom: '5px',
			},
			lineMiddle: {
				opacity: this.state.open ? 0 : 1,
				transform: this.state.open ? 'translateX(-16px)' : 'none',
			},
			lineBottom: {
				transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
				transformOrigin: 'top left',
				marginTop: '5px',
			},
		};
		return (
			<div
				style={styles.container}
				onClick={
					this.props.onClick
						? this.props.onClick
						: () => {
								this.handleClick();
						  }
				}
			>
				<div style={{ ...styles.line, ...styles.lineTop }} />
				<div style={{ ...styles.line, ...styles.lineMiddle }} />
				<div style={{ ...styles.line, ...styles.lineBottom }} />
			</div>
		);
	}
}

/* Footer.jsx */
function Footer(props) {
	const styles = {
		footer: {
			position: 'relative',
			bottom: 0,
			width: '100%',
			marginTop: '3rem',
			padding: '3rem',
			color: 'grey',
		},

		text: {
			padding: '0.5rem',
			display: 'flex',
			flexDirection: 'row',
		},
	};

	return (
		<Container>
			<div style={styles.footer}>
				<Row>
					<Col xs={12} md={12} sm={12} xl={9}>
						<h3 className="m-2 mb-4">Navigation</h3>
						<Row>
							<Col className="m-2" xs={12} md={3} sm={12} xl={3}>
								<h6>Participate with us:</h6>
								Overview
								<br />
								How it works
								<br />
								Own a hotel room
							</Col>
							<Col className="m-2" xs={12} md={3} sm={12} xl={3}>
								<h6>New Age Wealth:</h6>
								Digital Assets
								<br />
								How it works
								<br />
								GREATX
							</Col>
							<Col className="m-2" xs={12} md={3} sm={12} xl={3}>
								for sponsors
								<br />
								for Institution
								<br />
								Our Team
								<br />
								Connect With Us
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={12} sm={12} xl={3}>
						<Row>
							<div className="m-3 text-center">
								<img src={Telegram} style={{ height: '50px' }} />
								<img src={Facebook} style={{ height: '50px' }} />
								<img src={Twitter} style={{ height: '50px' }} />
							</div>
							<div className="m-3 text-center">
								<button
									style={{
										padding: '10px 30px',
										borderRadius: '30px',
										border: 'none',
										background: 'orange',
										textTransform: 'uppercase',
										color:'white'
									}}
								>
									chatbot
								</button>
							</div>
						</Row>
					</Col>
				</Row>

				<div style={styles.text}>
					<div>
						&copy; 2021 GreatX Technologies | Privacy Policy | Terms &amp;
						condition | Confidentiality | Disclamair | This site is best viewed
						in Chrome Firefox and Safari.
					</div>
					<div></div>
				</div>
			</div>
		</Container>
	);
}

/* Main.jsx */
class Main extends React.Component {
	render() {
		const styles = {
			main: {
				height: '100vh',
			},
		};

		return (
			<div style={styles.main}>
				<App />
			</div>
		);
	}
}

export default App;
