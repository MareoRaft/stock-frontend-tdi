import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'


class Iframe2 extends React.Component {
	render() {
		return (
			<Iframe
				url="http://localhost:5000/"
		        width="450px"
		        height="450px"
		        id="myId"
		        className="myClassname"
		        display="initial"
		        position="relative"
			/>
        );
	}
}

const propTypes = {
	onClick: PropTypes.func,
	char: PropTypes.string.isRequired,
};

Iframe2.propTypes = propTypes;
export default Iframe2;
