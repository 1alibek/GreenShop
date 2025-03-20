import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalAuthVisibility } from "../../../redux/modalSlice";
import { NotificationApi } from "../../../generic/notifications";
import { signInWithGoogle } from "../../../config";
import CookieUserInfo from "../../../generic/cookies";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("login");
      console.log(data);
    },
  });
};

export const useRegisterMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("register");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useLoginWithGoogle = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      console.log(data);

      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("login-google");
    },
    onError: (data) => {
      console.log(data);
    },
  });
};

export const useRegisterWithGoogle = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      console.log(data);

      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("login-google");
    },
    onError: (data) => {
      console.log(data);
    },
  });
};
