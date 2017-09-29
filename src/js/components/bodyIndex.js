import React from 'react';
var ReactDOM = require('react-dom');
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const defaultProps = {
	username:'默认用户名'
};

export default class BodyIndex extends React.Component{

	// componentWillMount(){
	// 	console.log('BodyIndex - componentWillMount')
	// }

	// componentDidMount(){
	// 	console.log('BodyIndex - componentDidMount')
	// }
	constructor(){
		super();//调用基类的所有的初始化方法
		this.state = {
			username:'figer',
			age:20
		};//初始化赋值
	};

	changeUserInfo(age){
		this.setState({age:age});
		// 第一种方式
		// var mySubmitButton = document.getElementById('submitButton');
		// ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
		// 第二种方式
		console.log(this.refs.submitButton);
		this.refs.submitButton.style.color = 'red';

		MixinLog.log();
	};
	handleChildChange(event){
		this.setState({age:event.target.value});
	};
	render(){
		// var userName = 'figer';
		// var boolInput = false;
		// var inputValue = '默认按钮';
		// var html = "hello\u0020world";//unicode转码
		// var html2 = "hello&nbsp;world";

		// setTimeout(()=>{
		// 	//更改state
		// 	this.setState({
		// 		username:'lmj',
		// 		age:30
		// 	});
		// },4000);

		return (
			<div>
				<h2>这里是主体部分</h2>
				{/*<p>{userName == '' ? '用户还没有登录' : '用户名：' + userName}</p>
				<p><input type='button' value={inputValue} disabled={boolInput}/></p>
				<p>{html}</p>
				<p dangerouslySetInnerHTML = {{__html : html2}}></p>*/}
				<p>{this.state.username} {this.state.age}</p>
				<Input placeholder="Basic usage" />
				<Input id="submitButton" ref='submitButton' type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
				<BodyChild {...this.props} id={4} handleChildChange={this.handleChildChange.bind(this)}/>
				<p>接收到父页面的属性：{this.props.userid} {this.props.username}</p>
			</div>
		)
	}
}

BodyIndex.propTypes = {
	userid:React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.prototype,MixinLog);

