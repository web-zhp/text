var config = {
  // 菜谱大全
  query: "http://apis.juhe.cn/cook/query.php",
  category: "http://apis.juhe.cn/cook/category?key=",
  AppKey: "7d4ec1832435f677062838354bad840a",
  index: "http://apis.juhe.cn/cook/index",
  SetTheme: function () {
    if (localStorage.getItem("theme") == null) {
    } else {
      $("body").addClass("theme-dark");
    }

    $(".model-change").on("click", function () {
      if (localStorage.getItem("theme") == "true") {
        $("body").removeClass("theme-dark");
        localStorage.removeItem("theme");
        $.toast("开启白天模式");
      } else {
        $("body").addClass("theme-dark");
        localStorage.setItem("theme", true);
        $.toast("开启黑夜模式");
      }
    });
  }
};
