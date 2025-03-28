import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import { AuthUser } from "../../../../@types";
import CookieUserInfo from "../../../../generic/cookies";

const AccountDetails = () => {
  const { getCookie } = CookieUserInfo();
  const user: AuthUser = getCookie("user");
  const updateDetails = (e: any) => {
    console.log(e.profile_photo.file?.response?.image_url.url);
  };
  return (
    <div>
      <Form
        onFinish={updateDetails}
        fields={[
          { name: ["name"], value: user?.name },
          { name: ["surname"], value: user?.surname },
          { name: ["email"], value: user?.email },
          { name: ["phone_number"], value: user?.phone_number },
          { name: ["username"], value: user?.username },
        ]}
        layout="vertical"
        className="grid grid-cols-2 gap-5"
      >
        <div>
          <Form.Item
            label="First name"
            name={"name"}
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input placeholder="First name" className="rounded-md" />
          </Form.Item>
          <Form.Item
            label="Email"
            name={"email"}
            rules={[{ required: true, message: "Please enter email " }]}
          >
            <Input placeholder="email" className="rounded-md" />
          </Form.Item>
          <Form.Item
            label="Username"
            name={"username"}
            rules={[{ required: true, message: "Please enter username " }]}
          >
            <Input placeholder="username" className="rounded-md" />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label="Surname"
            name={"surname"}
            rules={[{ required: true, message: "Please enter surname" }]}
          >
            <Input placeholder="Surname" className="rounded-md" />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name={"phone_number"}
            rules={[{ required: true, message: "Please enter surname" }]}
          >
            <Input
              addonBefore={"+998"}
              placeholder="Phone number"
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            rules={[{ required: true, message: "Please enter image" }]}
          >
            <Upload
              name="image"
              data={{ type: "image" }}
              action="https://backend-n14.onrender.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
              listType="picture"
              headers={{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }}
              accept=".png,.jpg,.jpeg"
            >
              <Button type="primary" icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </div>
        <button className="bg-primary w-[fit-content] text-white font-medium flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
          Save changes
        </button>
      </Form>
    </div>
  );
};

export default AccountDetails;
