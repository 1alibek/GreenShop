import { Card } from "antd";
import { FC } from "react";

import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";

import { BlogType } from "../../../@types";
import { useNavigate } from "react-router-dom";

const BlogCard: FC<BlogType> = ({
  title,
  short_description,
  created_by,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      actions={[
        <div>
          <EyeOutlined className="pr-1" />
          200
        </div>,
        <div>
          <CommentOutlined className="pr-1" />0
        </div>,
        <div>
          <HeartOutlined className="pr-1" />0
        </div>,
      ]}
    >
      <Card.Meta
        title={
          <div
          onClick={() => navigate(`/blog/${created_by}/${_id}`)}
            className="cursor-pointer"
          >
            {title}
          </div>
        }
        description={<>{short_description}</>}
      />
    </Card>
  );
};

export default BlogCard;
