import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const CustomForm = (props) => {
	const [form] = Form.useForm();

	const handleFormSubmit = (event, requestType, articleID = null) => {
		event.preventDefault();

		const title = event.target.elements.title.value;
		const content = event.target.elements.content.value;

		console.log({ title, content });

		if (requestType === "post") {
			axios
				.post("http://127.0.0.1:8000/api/", {
					title,
					content,
				})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
		} else if (requestType === "put") {
			axios
				.put(`http://127.0.0.1:8000/api/${articleID}/`, {
					title,
					content,
				})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	};

	return (
		<>
			<Form
				form={form}
				onSubmitCapture={(event) => handleFormSubmit(event, props.requestType, props.articleID)}>
				<Form.Item label="Title">
					<Input name="title" placeholder="Need a fancy title here..." />
				</Form.Item>
				<Form.Item label="Content">
					<Input name="content" placeholder="Neel some spicy content here..." />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						{props.btnText}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default CustomForm;
