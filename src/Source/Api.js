const key = '19101528-2a830a4e1b687e52e06cd9950';

export function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`

  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`no image for ${name}`));
    })
    .then(response => response.hits);
}