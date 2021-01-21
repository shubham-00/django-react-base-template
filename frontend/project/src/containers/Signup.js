import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import React, { useState } from "react";
import { UserOutlined, LockOutlined, LoadingOutlined, MailOutlined } from "@ant-design/icons";
import {
	Form,
	Input,
	Tooltip,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Option } = Select;

const RegistrationForm = (props) => {
	const [form] = Form.useForm();

	const onSubmit = (event) => {
		event.preventDefault();

		const username = event.target.elements.username.value;
		const email = event.target.elements.email.value;
		const password1 = event.target.elements.password1.value;
		const password2 = event.target.elements.password2.value;

		props.onAuth(username, email, password1, password2);

		props.history.push("/");
	};

	return (
		<Form
			form={form}
			name="register"
			onSubmitCapture={onSubmit}
			initialValues={{
				residence: ["zhejiang", "hangzhou", "xihu"],
				prefix: "86",
			}}
			scrollToFirstError>
			<Form.Item
				rules={[
					{
						required: true,
						message: "Please input your Username!",
					},
				]}>
				<Input
					name="username"
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Username"
				/>
			</Form.Item>

			<Form.Item
				rules={[
					{
						type: "email",
						message: "The input is not valid E-mail!",
					},
					{
						required: true,
						message: "Please input your E-mail!",
					},
				]}>
				<Input
					name="email"
					prefix={<MailOutlined className="site-form-item-icon" />}
					placeholder="Email"
				/>
			</Form.Item>

			<Form.Item
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
				hasFeedback>
				<Input.Password
					name="password1"
					prefix={<LockOutlined className="site-form-item-icon" />}
				/>
			</Form.Item>

			<Form.Item
				hasFeedback
				rules={[
					{
						required: true,
						message: "Please confirm your password!",
					},
					// ({ getFieldValue }) => ({
					// 	validator(_, value) {
					// 		if (!value || getFieldValue("password1") === value) {
					// 			return Promise.resolve();
					// 		}

					// 		return Promise.reject("The two passwords that you entered do not match!");
					// 	},
					// }),
				]}>
				<Input.Password
					name="password2"
					prefix={<LockOutlined className="site-form-item-icon" />}
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" style={{ marginRight: "5px" }}>
					Signup
				</Button>
				Or
				<NavLink to="/login/" style={{ marginLeft: "5px" }}>
					Login
				</NavLink>
			</Form.Item>
		</Form>
	);
};

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error: state.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, email, password1, password2) => {
			dispatch(actions.authSignup(username, email, password1, password2));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
