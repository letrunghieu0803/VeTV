const controller = {
  showListShiki: async function () {
    let mainA = document.querySelector(".list-shiki");
    let db = firebase.firestore();
    await db
      .collection("shikiData")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let mainContent = document.createElement("div");
          mainContent.className = "intro-new-feed intro2";
          let data = doc.data();
          mainContent.innerHTML = `
            <div class="detailShiki ml-md-10">
                    <p>- Tên thức thần: ${data.vnShikiName} (${data.engShikiName})</p>
                    <p>- Phẩm chất thức thần: ${data.rarity} </p>
                    <p>- Kĩ năng:</p>
                    <p class="ml-2 ml-md-4">   + Kĩ năng 1: ${data.skill1}</p>
                    <p class="ml-2 ml-md-4">   + Kĩ năng 2: ${data.skill2}</p>
                    <p class="ml-2 accordionml-md-4">   + Kĩ năng 3: ${data.skill3}</p>
                    <p>- Một số trường hợp sử dụng thức thần:  </p>
                    <p>+${data.useOfShiki}</p>

                </div>
            `;
          mainA.appendChild(mainContent);
        });
      });
  },

  postNewShiki: async function () {
    const vnShikiName = document.getElementById("vnShikiName");
    const engShikiName = document.getElementById("engShikiName");
    const rarityShikiName = document.getElementById("rarityShikiName");

    const skill1 = document.getElementById("skill1");
    const skill2 = document.getElementById("skill2");
    const skill3 = document.getElementById("skill3");
    const useOfShiki = document.getElementById("useOfShiki");
    const subBtn = document.getElementById("subBtn");

    subBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let newShiki = {
        vnShikiName: vnShikiName.value.trim(),
        engShikiName: engShikiName.value.trim(),
        skill1: skill1.value.trim(),
        skill2: skill2.value.trim(),
        skill3: skill3.value.trim(),
        useOfShiki: useOfShiki.value.trim(),
        rarity: rarityShikiName.value.trim(),
        createdAt: new Date().toLocaleString(),
        compare: 1 / new Date().getTime(),
      };
      let validateResult = [
        utils.validate(
          newShiki.vnShikiName,
          "#vnShikiName-error",
          "Chưa nhập tên Thức thần!"
        ),
        utils.validate(
          newShiki.rarity,
          "#rarityShikiName-error",
          "Chưa nhập phẩm chất Thức thần!"
        ),
        utils.validate(
          newShiki.engShikiName,
          "#engShikiName-error",
          "Chưa nhập tên Thức thần!"
        ),
        utils.validate(newShiki.skill1, "#skill1-error", "Chưa nhập kĩ năng!"),
        utils.validate(newShiki.skill2, "#skill2-error", "Chưa nhập kĩ năng!"),
        utils.validate(newShiki.skill3, "#skill3-error", "Chưa nhập kĩ năng!"),
        utils.validate(
          newShiki.useOfShiki,
          "#useOfShiki-error",
          "Chưa nhập mô tả!"
        ),
      ];
      if (utils.allPassed(validateResult)) {
        firebase.firestore().collection("shikiData").add(newShiki);
        alert("Đăng tải thành công!!!");
      }
    });

    let db = firebase.firestore();
    db.collection("shikiData")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          console.log(data);
        });
      });
  },

  clickBtn: function () {
    const homeBtn = document.getElementById("homeBtn");
    const listShikiBtn = document.getElementById("listShikiBtn");
    const postShikiBtn = document.getElementById("postShikiBtn");
    homeBtn.addEventListener("click", () => {
      view.showScreen("home");
    });
    listShikiBtn.addEventListener("click", () => {
      view.showScreen("listShiki");
    });
    postShikiBtn.addEventListener("click", () => {
      view.showScreen("postShikiData");
    });
  },
};
