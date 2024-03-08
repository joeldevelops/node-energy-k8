import * as utils from './utils.js';

export const userCreate = (host, http) => {
  const createPayload = {
    name: utils.getRandomName(),
    email: utils.getRandomEmail(),
  };
  http.post(`${host}/api/v1/users`, JSON.stringify(createPayload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const userRead = (host, http) => {
  http.get(`${host}/api/v1/users/random`);
}

export const userUpdate = (host, http) => {
  // First, get a random user
  const res = http.get(`${host}/api/v1/users/random`);
  const userId = res.json().id;

  const updatePayload = {
    name: utils.getRandomName(),
    email: utils.getRandomEmail(),
  };
  http.put(`${host}/api/v1/users/${userId}`, JSON.stringify(updatePayload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const userDelete = (host, http) => {
  // First, get a random user
  const res = http.get(`${host}/api/v1/users/random`);
  const userId = res.json().id;

  http.del(`${host}/api/v1/users/${userId}`);
}

export const comicsCreate = (host, http) => {
  // first, get a random user
  const res = http.get(`${host}/api/v1/users/random`);
  const userId = res.json().id;

  const createPayload = {
    name: utils.getRandomName(),
    author: utils.getRandomName(),
    userId: userId,
  };
  http.post(`${host}/api/v1/comics`, JSON.stringify(createPayload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const comicsRead = (host, http) => {
  http.get(`${host}/api/v1/comics/random`);
}

export const comicsUpdate = (host, http) => {
  // First, get a random comic
  const res = http.get(`${host}/api/v1/comics/random`);
  const comicId = res.json().id;

  const updatePayload = {
    name: utils.getRandomName(),
    author: utils.getRandomName(),
  };
  http.put(`${host}/api/v1/comics/${comicId}`, JSON.stringify(updatePayload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const comicsDelete = (host, http) => {
  // First, get a random comic
  const res = http.get(`${host}/api/v1/comics/random`);
  const comicId = res.json().id;

  http.del(`${host}/api/v1/comics/${comicId}`);
}

export const comicsGenerateReport = (host, http, num) => {
  http.get(`${host}/api/v1/comics/generate-report/${num}`);
}

export const collectionCreate = (host, http) => {
  // First, get a random user
  const res = http.get(`${host}/api/v1/users/random`);
  const userId = res.json().id;

  // Then, get a comic from the user
  let comicId;
  try {
    const res2 = http.get(`${host}/api/v1/comics/user/${userId}`);
    const comics = res2.json();
    comicId = comics[0].id;
  } catch (e) {
    // On failure, create a comic
    const createPayload = {
      name: utils.getRandomName(),
      author: utils.getRandomName(),
      userId: userId,
    };
    const res3 = http.post(`${host}/api/v1/comics`, JSON.stringify(createPayload), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    comicId = res3.json().id;
  }

  const createPayload = {
    name: utils.getRandomName(),
    userId: userId,
    comicId: comicId,
  };
  http.post(`${host}/api/v1/collections`, JSON.stringify(createPayload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const collectionRead = (host, http) => {
  http.get(`${host}/api/v1/collections/random`);
}

export const collectionUpdate = (host, http) => {
  // First, get a random collection
  let collectionId;
  try {
    const res = http.get(`${host}/api/v1/collections/random`);
    collectionId = res.json().id;
  } catch (e) {
    collectionCreate(host, http);
    const res = http.get(`${host}/api/v1/collections/random`);
    collectionId = res.json().id;
  }

  const updatePayload = {
    name: utils.getRandomName(),
  };
  http.put(`${host}/api/v1/collections/${collectionId}`, JSON.stringify(updatePayload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const collectionDelete = (host, http) => {
  // First, get a random collection
  let collectionId;
  try {
    const res = http.get(`${host}/api/v1/collections/random`);
    collectionId = res.json().id;
  } catch (e) {
    collectionCreate(host, http);
    const res = http.get(`${host}/api/v1/collections/random`);
    collectionId = res.json().id;
  }

  http.del(`${host}/api/v1/collections/${collectionId}`);
}