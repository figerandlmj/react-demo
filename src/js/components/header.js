import React from 'react';
import {Link} from 'react-router';

export default class ComponentHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			minHeader:false
		};
	};

	switchHeader(){
		this.setState({
			minHeader:!this.state.minHeader
		});
	};

	render(){
		const styleComponentHeader = {
			header:{
				backgroundColor:"#333",
				color:"#fff",
				"paddingTop":(this.state.minHeader) ? "3px" : "15px",
				paddingBottom:(this.state.minHeader) ? "3px" : "15px"
			}
		};
		// <header style={styleComponentHeader.header} class="smallFontSize" onClick={this.switchHeader.bind(this)}>
		return (
			<header style={styleComponentHeader.header} class="smallFontSize">
				<h1>这里是头部</h1>
				<ul>
					<li><Link to={`/`}>首页</Link></li>
					<li><Link to={`/details`}>嵌套的详情页</Link></li>
					<li><Link to={`/list/1234`}>列表页</Link></li>
				</ul>
			</header>
		);
	};
}


