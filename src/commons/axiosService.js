import axios from "axios";
import History from '../helpers/history';

class AxiosService {
  constructor() {
    const instance = axios.create();
    //instance.defaults.headers.common['Authorization'] = "Default";
    instance.interceptors.response.use(this.handlesuccess, this.handleError);
    instance.interceptors.request.use(
      (config) => {
        try {
          const token = localStorage.getItem('access-token');
          console.log(token);
         // config.headers.Authorization = token ? token : "";
          config.headers.Authorization = token ? `Bearer ${token}`: '';
        } catch (e) {
          History.push("/login");
        }

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    this.instance = instance;
  }
  handlesuccess = (res) => {
    return res;
  };
  handleError = async (error) => {
    return Promise.reject(error);
  };


  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
