import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";

const Articles = (props) => {
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 5,
			}}
			dataSource={props.data}
			renderItem={(item) => (
				<List.Item
					key={item.title}
					actions={[
						<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
						<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
						<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
					]}
					extra={
						<img
							width={272}
							alt="logo"
							src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
						/>
					}>
					<List.Item.Meta
						avatar={<Avatar src={item.avatar} />}
						title={<a href={`/${item.id}`}>{item.title}</a>}
						description={item.description}
					/>
					{item.content}
				</List.Item>
			)}
		/>
	);
};

export default Articles;
