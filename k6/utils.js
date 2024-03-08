export const getRandomEmail = () => {
  const randomString = Math.random().toString(36).substring(7);
  return `${
    randomString
  }@mail.com`;
}

export const getRandomName = () => {
  const randomString = Math.random().toString(36).substring(7);
  return randomString;
}

export const getRandomUserID = (range) => {
  let max = range || 1000000;
  return Math.floor(Math.random() * max);
}