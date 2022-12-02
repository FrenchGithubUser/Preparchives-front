import { api } from "boot/axios";

export function login(form) {
    return new Promise((resolve, reject) => {
      return api
        .post("user/login", form)
        .then(({ data }) => {
          resolve(data);
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
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
export function logout() {
    return new Promise((resolve, reject) => {
      return api
        .get("user/logout")
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        }).finally(()=>{
           localStorage.removeItem('access_token')
           localStorage.removeItem('username')
        })
    });
}
export function sendSujet(form) {
    return new Promise((resolve, reject) => {
      return api
        .post("sujet", form)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
export function searchSujets(tags) {
    return new Promise((resolve, reject) => {
      return api
        .get("sujet/search?matiere=" + tags.matiere + "&filiere=" + tags.filiere + "&concours=" + tags.concours + "&annee=" + tags.annee + "&ecrit=" + tags.ecrit + "&epreuve=" + tags.epreuve)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
export function getSujet(id) {
    return new Promise((resolve, reject) => {
      return api
        .get("sujet/info?id=" + id)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}