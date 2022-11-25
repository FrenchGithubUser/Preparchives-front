import { api } from "boot/axios";

export function login(form) {
    return new Promise((resolve, reject) => {
      return api
        .post("user/login", form)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
export function register(form) {
    return new Promise((resolve, reject) => {
      return api
        .post("user/register", form)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}