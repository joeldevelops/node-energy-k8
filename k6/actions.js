import * as utils from './utils.js';

const params = {
  timeout: '360s',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const userCreate = (host, http) => {
  const createPayload = {
    name: utils.getRandomName(),
    email: utils.getRandomEmail(),
  };
  const res = http.post(`${host}/api/v1/users`, JSON.stringify(createPayload), params);

  return res.json().id;
}

export const userRead = (host, http) => {
  http.get(`${host}/api/v1/users/random`, params);
}

export const userUpdate = (host, http) => {
  // First, create a random user
  const userId = userCreate(host, http);

  const updatePayload = {
    name: utils.getRandomName(),
    email: utils.getRandomEmail(),
  };
  http.put(`${host}/api/v1/users/${userId}`, JSON.stringify(updatePayload), params);
}

export const userDelete = (host, http) => {
  // First, create a random user
  const userId = userCreate(host, http);

  if (!userId || userId < 0) {
    return;
  }

  http.del(`${host}/api/v1/users/${userId}`, params);
}

export const comicsCreate = (host, http) => {
  // first, create a random user
  const userId = userCreate(host, http);

  const createPayload = {
    name: utils.getRandomName(),
    author: utils.getRandomName(),
    userId: userId,
  };
  const res = http.post(`${host}/api/v1/comics`, JSON.stringify(createPayload), params);

  return res.json().id;
}

export const comicsRead = (host, http) => {
  http.get(`${host}/api/v1/comics/random`, params);
}

export const comicsUpdate = (host, http) => {
  // First, create a random comic
  const comicId = comicsCreate(host, http);

  const updatePayload = {
    name: utils.getRandomName(),
    author: utils.getRandomName(),
  };
  http.put(`${host}/api/v1/comics/${comicId}`, JSON.stringify(updatePayload), params);
}

export const comicsDelete = (host, http) => {
  // First, create a random comic
  const comicId = comicsCreate(host, http);

  if (!comicId || comicId < 0) {
    return;
  }

  http.del(`${host}/api/v1/comics/${comicId}`, params);
}

export const comicsGenerateReport = (host, http, num) => {
  http.get(`${host}/api/v1/comics/generate-report/${num}`, params);
}

export const collectionCreate = (host, http) => {
  // First, create a random user
  const userId = userCreate(host, http);

  // Then, get a comic from the user
  let comicId;
  try {
    const res2 = http.get(`${host}/api/v1/comics/user/${userId}`, params);
    const comics = res2.json();
    comicId = comics[0].id;
  } catch (e) {
    // On failure, create a comic
    const createPayload = {
      name: utils.getRandomName(),
      author: utils.getRandomName(),
      userId: userId,
    };
    const res3 = http.post(`${host}/api/v1/comics`, JSON.stringify(createPayload), params);

    comicId = res3.json().id;
  }

  const createPayload = {
    name: utils.getRandomName(),
    userId: userId,
    comicId: comicId,
  };
  const res = http.post(`${host}/api/v1/collections`, JSON.stringify(createPayload), params);

  return res.json().id;
}

export const collectionRead = (host, http) => {
  http.get(`${host}/api/v1/collections/random`, params);
}

export const collectionUpdate = (host, http) => {
  // First, create a random collection
  const collectionId = collectionCreate(host, http);

  const updatePayload = {
    name: utils.getRandomName(),
  };
  http.put(`${host}/api/v1/collections/${collectionId}`, JSON.stringify(updatePayload), params);
}

export const collectionDelete = (host, http) => {
  // First, create a random collection
  const collectionId = collectionCreate(host, http);

  if (!collectionId || collectionId < 0) {
    return;
  }

  http.del(`${host}/api/v1/collections/${collectionId}`, params);
}