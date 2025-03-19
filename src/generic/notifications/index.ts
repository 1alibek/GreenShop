import { notification } from "antd";

type NotificationsType = "login" | "register" | "login-google";
export const NotificationApi = () => {
  const notify = (type: NotificationsType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login succsesfull" });
      case "register":
        return notification.success({ message: "Register succsesfull" });
      case "login-google":
        return notification.success({
          message: "Login with google succsesfull",
        });

      default:
        break;
    }
  };
  return notify;
};

export default Notification;
