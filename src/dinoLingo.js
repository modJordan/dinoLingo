export default class DinoLingo {
  static getDino(dinoLore) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=3&words=15`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, dinoLore]);
        } else {
          reject([this, response, dinoLore]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function (dinoDataArray) {
      printElements(dinoDataArray);
    }, function (errorArray) {
      printError(errorArray);
    });
  }
}