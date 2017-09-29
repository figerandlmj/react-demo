import React from 'react';

export default class BodyChild extends React.Component{
	render(){
		return (
			<div>
				<p>子页面输入：<input type="text" onChange={this.props.handleChildChange}/></p>
				<p>{this.props.id} {this.props.userid} {this.props.username}</p>
			</div>
		);
	};
}