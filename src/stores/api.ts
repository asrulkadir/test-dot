import axios from "axios";
import create from "zustand";

const url_API = process.env.REACT_APP_API_AUTH;

interface IUsers {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Store {
  loading: boolean;
  users: IUsers[];
  total_pages: number;
  getUsers: (page: number) => void;
}

const useApi = create<Store>((set) => ({
  loading: false,
  users: [],
  total_pages: 0,
  getUsers: async (page) => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${url_API}/api/users?page=${page}`, {
        timeout: 10000,
      });

      set({ loading: false, users: data.data, total_pages: data.total_pages });
    } catch (err: any) {
      console.log(err);
      set({
        loading: false,
      });
    }
  },
}));

export default useApi;
