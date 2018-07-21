var list = $(".cp-list"),
  html = "";

function GetIndexData() {
  $.ajax({
    url: config.query,
    type: "GET",
    dataType: "jsonp",
    data: {
      key: config.AppKey,
      menu: "鱼",
      rn: "10",
      pn: "1"
    },
    success: function(res) {
      if (res.resultcode === "200") {
        Rendering(res.result.data);
      } else {
        $.toast("网络请求失败");
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}

GetIndexData();

function Rendering(data) {
  localStorage.setItem("index", JSON.stringify(data));
  for (var i = 0; i < data.length; i++) {
    list.append(`
                <a href="info.html?id=${data[i].id}&action=index" target="_blank">
                    <div class="card">
                        <div class="card-content">
                            <div class="list-block media-list">
                                <ul>
                                    <li class="item-content">
                                        <div class="item-media">
                                            <img src="${data[i].albums[0]}"
                                                width="44">
                                        </div>
                                        <div class="item-inner">
                                            <div class="item-title-row">
                                                <div class="item-title">${
                                                  data[i].title
                                                }</div>
                                            </div>
                                            <div class="item-subtitle">${
                                              data[i].burden
                                            }</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer">
                        
                        </div>
                    </div>
                </a> 
                `);

    cuttingData(data[i].tags, i);
  }
}

function cuttingData(tag, i) {
  var card_footer = $(".card-footer")[i],
    taglist = tag.split(";"),
    dom = "";
  for (var j = 0; j < taglist.length; j++) {
    card_footer.append(`${taglist[j]} `);
  }
}
