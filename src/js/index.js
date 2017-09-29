var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

export default class Index extends React.Component{

	// componentWillMount(){
	// 	console.log('Index - componentWillMount')
	// }

	// componentDidMount(){
	// 	console.log('Index - componentDidMount')
	// }

	render(){
		var component=<ComponentHeader/>;
		// if(用户已登录){
		// 	component=<ComponentLoginHeader/>;
		// }
		return (
			<div>
				{component}
				<BodyIndex userid={123} username={'nick'}/>
				<div>
					{this.props.children}
				</div>
				<ComponentFooter/>
			</div>
		);
	};
}