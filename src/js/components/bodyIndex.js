import React from 'react';

export default class BodyIndex extends React.Component{
	render(){
		var userName = 'figer';
		var boolInput = false;
		var inputValue = '默认按钮';
		var html = "hello\u0020world";//unicode转码
		var html2 = "hello&nbsp;world";
		// 注释
		return (
			<div>
				<h1>这里是主体部分</h1>
				<P>{userName == '' ? '用户还没有登录' : '用户名：' + userName}</p>
				<P><input type='button' value={inputValue} disabled={boolInput}/></p>
				{/* 注释 */}
				<p>{html}</p>
				<p dangerouslySetInnerHTML = {{__html : html2}}></p>
			</div>
		)
	}
}


