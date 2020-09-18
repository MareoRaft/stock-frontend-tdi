import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'

let URL = process.env['REACT_APP_BACKEND_URL']
console.log('URL is ' + URL)



class Iframe2 extends React.Component {
	render() {
		return (
			<Iframe {...{
				url: URL,
		        width: "450px",
		        height: "450px",
		        id: "myId",
		        className: "myClassname",
		        display: "initial",
		        position: "relative",
			}}/>
        );
	}
}

const propTypes = {
	onClick: PropTypes.func,
	char: PropTypes.string.isRequired,
};

Iframe2.propTypes = propTypes;
export default Iframe2;
