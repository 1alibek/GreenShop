import { notification } from "antd";

type NotificationsType =
  | "login"
  | "register"
  | "login-google"
  | "add-data"
  | "delete-data"
  | "not-coupon"
  | "isnot-coupon"
  | "coupon";
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
      case "add-data":
        return notification.success({
          message: " Added data to card",
        });
      case "delete-data":
        return notification.success({
          message: "Delete card",
        });
        case "not-coupon":
          return notification.success({
            message: "Plese enter coupon",
          });
          case "isnot-coupon":
            return notification.error({
              message: "Coupon is not defined",
            });
            case "coupon":
              return notification.success({
                message: "Coupon successfull",
              });
      default:
        break;
    }
  };
  return notify;
};

export default Notification;
