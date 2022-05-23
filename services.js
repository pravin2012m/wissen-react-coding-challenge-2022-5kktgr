const SubmitAddRequest = (url, body) => {
  return new Promise(async (resolve, reject) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-type': 'application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        const jsonRes = response.json();
        resolve(jsonRes);
      })
      .catch((error) => {
        console.error('Erorr from API', error);
        reject(error);
      });
  });
};

export const SubmitGetRequest = (url) => {
  return new Promise(async (resolve, reject) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/JSON',
        'Content-type': 'application/JSON',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        const jsonRes = response.json();
        resolve(jsonRes);
      })
      .catch((error) => {
        console.error('Erorr from API', error);
        reject(error);
      });
  });
};

export default SubmitAddRequest;
