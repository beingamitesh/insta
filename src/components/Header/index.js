import React from "react";
import "./Header.css";
import 'font-awesome/css/font-awesome.min.css';
class Header extends React.Component {
	render(){
		return (	
			<nav class="nav-class">
				<span class="glyphicon glyphicon-name"></span>
				<div class="nav-icons">
					<span class="icons"><i class="fa fa-search fa-lg" aria-hidden="true"></i></span>
					<span class="icons"><i class="fa fa-bell fa-lg" aria-hidden="true"></i></span>
					<span class="icons"><i class="fa fa-bookmark-o fa-lg" aria-hidden="true"></i></span>
					<span class="icons"><i class="fa fa-shopping-bag fa-lg" aria-hidden="true"></i></span>
				</div>
				<span class="nav-text">#Zypher</span>
			</nav>
		)
	};
}
export default Header;