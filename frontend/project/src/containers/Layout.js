import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
	return (
		<Layout className="layout" style={{ maxWidth: "100%" }}>
			<Header>
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
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

export default CustomLayout;
