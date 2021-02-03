import React from "react"

class Dropdown extends React.component{
	constructor(props) {
		super(props);
		this.state = {showComponent : true}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState({ showComponent: !this.state.showComponent });
	}
	
	render() {
		const { data } = this.props;
		return (
			<div onClick={this.handleClick}>
				<div class={this.state.showComponent ? 'visible' : ''}>
					{props.children}
				</div>
			</button>
		)
  }
}

export default Dropdown