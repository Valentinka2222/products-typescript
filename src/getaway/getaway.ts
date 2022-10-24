const baseUrl = 'https://testbackend.nc-one.com/image';

export const getProductsList = () => {
  return fetch(`${baseUrl}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Internal Server Error. Can't display events");
      }
    })
    .catch(error => console.log(error));
};

export const getImageByID = (id: number | string) => {
  return fetch(`${baseUrl}?id=${id}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Internal Server Error. Can't display events");
      }
    })
    .catch(error => console.log(error));
};
