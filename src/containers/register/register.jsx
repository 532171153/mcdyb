/*
* 注册路由组件
* */
import React, { Component } from "react";
import {
	NavBar,
	WingBlank,
	List,
	InputItem,
	WhiteSpace,
	Radio,
	Button,
} from "antd-mobile";

import Logo from "../../components/logo/logo";

const ListItem = List.Item;

export default class Register extends Component {
	render() {
		return (
			<div>
				<NavBar>迈出第一步</NavBar>
				<Logo></Logo>
			</div>
		);
	}
}