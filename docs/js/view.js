const view = {
    showScreen: async function (screenName) {
    let app = document.querySelector("#app");
    switch (screenName) {
      case "home": {
        app.innerHTML = components.home;
        controller.clickBtn()
        break;

      }

      case "postShikiData":{
        app.innerHTML = components.postShikiData;
        controller.clickBtn()
        controller.postNewShiki()

        break;
      }
      case "listShiki":{
        app.innerHTML = components.listShiki;
        controller.showListShiki()
        controller.clickBtn()

        break;
      }
    }
  },
  saveCurrentView: function (name) {
    localStorage.setItem("currentView", name);
  },

  saveDatatoStorage: function (key, data) {
    localStorage.setItem(key, data);
  },

  getDataFromStorage: function (key) {
    return localStorage.getItem(key);
  },
};
