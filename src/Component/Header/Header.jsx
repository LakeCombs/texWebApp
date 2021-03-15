import React from "react";

import { Menu, Dropdown, Button, Space } from "antd";

import "./Header.css";
import { Container } from "react-bootstrap";

function Header() {
	const menu = (
		<Menu>
			<Menu.Item>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.antgroup.com">
					1st menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.aliyun.com">
					2nd menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.luohanacademy.com">
					3rd menu item
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<div className="header">
			<img className="Logo" />
			<div className="HederSide">
				<Dropdown overlay={menu} placement="bottomCenter">
					<p> about</p>
				</Dropdown>
				<Dropdown overlay={menu} placement="bottomCenter">
					<p>services</p>
				</Dropdown>
				<Dropdown overlay={menu} placement="bottomCenter">
					<p>products</p>
				</Dropdown>
				<Button
					style={{
						backgroundColor: "red",
						color: "white",
						outline: "none",
						height: "40px",
						width: "150px",
						fontSize: "20px"
					}}>
					Contact Us
				</Button>
			</div>
		</div>
	);
}

export default Header;
