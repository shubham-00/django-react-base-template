import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const NormalLoginForm = (props) => {
	let errorMessage = null;
	if (props.error) {
		errorMessage = <p>{props.error.message}</p>;
	}

	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	const onSubmit = (event) => {
		event.preventDefault();

		const username = event.target.elements.username.value;
		const password = event.target.elements.password.value;

		props.onAuth(username, password);

		props.history.push("/");
	};

	return (
		<>
			{errorMessage}

			{props.loading ? (
				antIcon
			) : (
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onSubmitCapture={onSubmit}>
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
								required: true,
								message: "Please input your Password!",
							},
						]}>
						<Input
							name="password"
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ marginRight: "5px" }}>
							Login
						</Button>
						Or
						<NavLink to="/signup/" style={{ marginLeft: "5px" }}>
							Signup
						</NavLink>
					</Form.Item>
				</Form>
			)}
		</>
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
		onAuth: (username, password) => {
			dispatch(actions.authLogin(username, password));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
