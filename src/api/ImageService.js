class ImageApi {
  
  static mapIntoObject(arr) { 
    // reduce will go through each elem on the array and return the new acc elem.
    debugger;
    return arr.reduce((acc, currElem) => {
      acc[currElem.albumId] = [...(acc[currElem.albumId] || []), currElem];
      return acc;
    }, {});
    /* As we are not updating images list every-time, we can save this structure into 
    * store as a hash in order to have a performace improvement 
    * we transform the array of images into a hash with albumId as key
    * {
        albumId_1: [img1, img2, img3],
        albumId_2: [img4, img5, img6],
      }  
    */
  }
  
  
  static getAllAlbums() {
    /*
    Async: ensures that the function returns a promise, 
          and wraps non-promises in it. 
    Await: that works only inside async functions. 
          makes JavaScript wait until that promise settles and returns its result.
          It’s just a more elegant syntax of getting the promise result than 
          promise.then
    */
    return fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        console.log(response);
        return response.json();
      });
  }
  
  
  static getAllImages() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
      console.log(response);
      return response.json();
    });
  }
  
  
  static getAllImagesByAlbums(images) {
    return this.mapIntoObject(images);
  }
}

export default ImageApi;