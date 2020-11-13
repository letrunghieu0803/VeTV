const components = {
  postShikiData: `
    <div class="container d-flex flex-column justify-content-center mt-4">
      <h2 class="text-center mb-3">Bảng thông tin thức thần</h2>
      <form
        id="form"
        class="form-group col-12  d-flex flex-column justify-content-center border border-primar"
      >
        <div id="name" class="d-flex flex-column flex-md-row mt-3 ">
          <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center"
          >
            <label class="font-weight-bold" for="vnShikiName">Tên Việt thường dùng của thức thần:</label>
            <input type="text" name="" id="vnShikiName" />
          <div id="vnShikiName-error" class="error"></div>

          </div>
          <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center"
          >
            <label class="font-weight-bold" for="engShikiName">Tên Tiếng Anh của thức thần:</label>
            <input type="text" id="engShikiName" />
          <div id="engShikiName-error" class="error"></div>

          </div>
        </div>
        <div
        class="col-12 d-flex flex-column justify-content-center">
        <label class="font-weight-bold" for="rarityShikiName">Phẩm chất thức thần:</label>
        <input type="text" id="rarityShikiName" />
      <div id="rarity-error" class="error"></div>
        <div class="col-12 d-flex flex-column justify-content-center">
          <label class="font-weight-bold" for="skill">Skill</label>
          <div id="skill">
              <div class="d-flex flex-column">

                  <label class="font-italic" for="skill1">Mô tả skill 1:</label>
                  <textarea type="text" id="skill1" class="textAreaForm"></textarea>
                   <div id="skill1-error" class="error"></div>
              </div>
              <div class="d-flex flex-column">

                  <label class="font-italic" for="skill2">Mô tả skill 2:</label>
                  <textarea type="text" id="skill2" class="textAreaForm"></textarea>
                <div id="skill2-error" class="error"></div>
              </div>
              <div class="d-flex flex-column">

                  <label class="font-italic" for="skill3">Mô tả skill 3:</label>
                  <textarea type="text" id="skill3" class="textAreaForm"></textarea>
                <div id="skill3-error" class="error"></div>
              </div>

          </div>
        </div>
        <div class="col-12 d-flex flex-column justify-content-center">
          <label class="font-weight-bold" for="useOfShiki">Điểm mạnh yếu của thức thần:</label>
          <textarea id="useOfShiki" rows="5"></textarea>
          <div id="useOfShiki-error" class="error"></div>

        </div>
        <input id="subBtn" class="btn-primary mb-3" type="submit" value="Gửi" />
      </form>
    </div>
`,
home: `  
<div class="container d-flex justify-content-center">
          <img src="/image/VeTV_nexttime.jpg" class="img-thumbnail img-fluid" alt="" >
      </div>
  
`
,
listShiki: `
<div class="list-shiki">
              <h1>Danh sach Skikigami</h1>          
</div>
`
};
