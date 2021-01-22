import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => {
	return (
		<div>
			<Route exact path="/" component={ArticleList} />
			<Route exact path="/login/" component={Login} />
			<Route exact path="/signup/" component={Signup} />
			<Route exact path="/article/:articleID/" component={ArticleDetail} />
		</div>
	);
};

export default BaseRouter;
