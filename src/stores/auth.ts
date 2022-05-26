import create from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const url_auth = process.env.REACT_APP_API_AUTH;

interface IPayloadLogin {
  email: string;
  password: string;
}

interface Store {
  token: string;
  loading: boolean;
  error: any;
  login: (payload: IPayloadLogin) => void;
  logout: () => void;
}

const useAuth = create<Store>((set) => ({
  loading: false,
  token: "",
  error: null,
  login: async (payload: IPayloadLogin) => {
    try {
      set({ loading: true, error: null });

      const { data } = await axios.post(`${url_auth}/api/login`, payload, {
        timeout: 10000,
      });

      Cookies.set("token", data.token, {
        secure: true,
        // expire every 2h
        expires: 2 / 24,
      });

      set({ loading: false, token: data.token });

      window.location.href = "/";
    } catch (err: any) {
      set({ error: err.response.data.error, loading: false });
    }
  },
  logout: () => {
    Cookies.remove("token");
    set({ token: "" });

    window.location.href = "/login";
  },
}));

export default useAuth;
