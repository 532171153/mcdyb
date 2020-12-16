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
import "./register.less";

const ListItem = List.Item;

export default class Register extends Component {
	render() {
		return (
			<div>
				<NavBar>迈出第一步</NavBar>
				<Logo />
				<WingBlank>
					<List>
						<InputItem>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</InputItem>
						<InputItem type="password">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</InputItem>
						<InputItem type="password">确认密码：</InputItem>
						<ListItem>
							<span>用户类型：</span>
								<Radio className="typeRadio">大神</Radio>
								<Radio className="typeRadio">老板</Radio>

						</ListItem>
						<WhiteSpace />
						<Button type="primary" className="register">注册</Button>
						<Button>已有账户</Button>
					</List>
				</WingBlank>
			</div>
		);
	}
}