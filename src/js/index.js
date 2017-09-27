var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';

class Index extends React.Component{
	render(){
		var component=<ComponentHeader/>;
		// if(用户已登录){
		// 	component=<ComponentLoginHeader/>;
		// }
		return (
			<div>
				{component}
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		)
	}
}

ReactDOM.render(
	<Index/>,
	document.getElementById('example')
);