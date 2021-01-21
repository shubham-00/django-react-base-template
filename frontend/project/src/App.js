import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
// import ArticleList from "./containers/ArticleListView";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import { useEffect } from "react";

const App = (props) => {
	useEffect(() => {
		props.onTryAutoSignUp();
	}, []);

	return (
		<div>
			<Router>
				<CustomLayout {...props}>
					<BaseRouter />
					{/* <ArticleList /> */}
				</CustomLayout>
			</Router>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.token !== null,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignUp: () => {
			dispatch(actions.authCheckState());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
