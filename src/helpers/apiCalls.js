import { api } from "boot/axios";

export function login(credentials) {
  console.log(credentials)
    return new Promise((resolve, reject) => {
      return api
        .post("user/login", credentials)
        .then(({ data }) => {
          if (data !== undefined) {
            resolve(data.token);
          }
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }