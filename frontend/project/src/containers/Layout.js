import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
	return (
		<Layout className="layout" style={{ maxWidth: "100%" }}>
			<Header>
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1">
						<Link to="/">Posts</Link>
					</Menu.Item>

					{props.isAuthenticated ? (
						<Menu.Item key="2" onClick={props.logout}>
							Logout
						</Menu.Item>
					) : (
						<Menu.Item key="2">
							<Link to="/login/">Login</Link>
						</Menu.Item>
					)}
				</Menu>
			</Header>
			<Content>
				<Breadcrumb style={{ margin: "16px 5px" }}>
					<Breadcrumb.Item>
						<Link to="/">Home</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						<Link to="/">List</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div style={{ minHeight: "280px", padding: "2%", background: "#fff" }}>
					{props.children}
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch(actions.logout());
		},
	};
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
