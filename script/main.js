$(function () {
  console.log("Ready");

  var listTemplate = $("#list-template").html();

  //Cache dom
  var $list = $("#priceList");

  $.ajax({
    url: "../data/MOCK_DATA.json",
    dataType: "json",
    success: function(data) {
      $.each(data, function(i, item){
        $list.append(Mustache.render(listTemplate, item));
      });
    },
    error: function(data){
      console.error("error");
    }
  })
});
