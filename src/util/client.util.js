import axios from 'axios';

export const client = (token = null) => {
    const headers = {
            'Authorization': token ? `${token}` : '',
            'Content-Type' : 'application/json',
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*',
        };

    let instance = axios.create ();

    instance.interceptors.request.use(
        async config => {
          config.headers = { 
            'Authorization': `${token}`,
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
          return config;
        },
        error => {
          Promise.reject(error)
      });

      // instance.interceptors.response.use((response) => {
      //   return Promise.resolve(response)
      // }, async function (error) {
      //   const originalRequest = error.config;
      //   // if (error.response.status === 403 && !originalRequest._retry) {
      //   //   originalRequest._retry = true;
      //   //   const access_token = await refreshAccessToken();            
      //   //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      //   //   return instance(originalRequest);
      //   // }
      //   return Promise.reject(error);
      // });
    
    return instance;
};