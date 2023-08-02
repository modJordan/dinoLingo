export default class DinoLingo {
  static getDino(dinoLore) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
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
  }
}