import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'



class Iframe2 extends React.Component {
	render() {
		return (
			<Iframe {...{
				url: this.props.url,
		        width: "600px",
		        height: "600px",
		        id: "myId",
		        className: "myClassname",
		        display: "initial",
		        position: "relative",
			}}/>
        );
	}
}

const propTypes = {
	url: PropTypes.string.isRequired,
};

Iframe2.propTypes = propTypes;
export default Iframe2;
