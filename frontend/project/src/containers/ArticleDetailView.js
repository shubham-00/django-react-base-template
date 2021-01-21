import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "antd";
import CustomForm from "../components/Form";

const ArticleDetail = (props) => {
	const listData = [];
	for (let i = 0; i < 23; i++) {
		listData.push({
			href: "https://ant.design",
			title: `ant design part ${i}`,
			avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			description:
				"Ant Design, a design language for background applications, is refined by Ant UED Team.",
			content:
				"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
		});
	}

	const handleDelete = (event) => {
		event.preventDefault();

		const articleID = props.match.params.articleID;

		axios.delete(`http://127.0.0.1:8000/api/${articleID}`);

		props.history.push("/");
	};

	const [article, setArticle] = useState({});

	useEffect(() => {
		const articleID = props.match.params.articleID;

		axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
			setArticle(res.data);
		});
	}, []);

	return (
		<>
			<Card title={article.title}>
				<p>{article.content}</p>
			</Card>

			<CustomForm requestType="put" articleID={props.match.params.articleID} btnText="Update" />
			<form onSubmit={handleDelete}>
				<Button type="danger" htmlType="submit">
					Delete
				</Button>
			</form>
		</>
	);
};

export default ArticleDetail;
