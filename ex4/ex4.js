$(() => {
  $("button").click(function () {
    $.ajax({
      type: "GET",
      url: "2009.xml",
      dataType: "xml",
      success: function (xml) {
        let un = $(xml).find("un").text();
        let deux = $(xml).find("deux").text();
        let trois = $(xml).find("trois").text();

        $(".cont").append(`${un} <br>`);
        $(".cont").append(`${deux}<br>`);
        $(".cont").append(`${trois}<br>`);
      },
      error: (xhr, status, error) => {
        console.error(`Error: ${error}`);
      },
    });
  });
});



// json

$(() => {
  $("button").click(function () {
    $.ajax({
      type: "GET",
      url: "2009.json",
      dataType: "json",
      success: function (json) {
        let un = json.un;
        let deux = json.deux;
        let trois = json.trois;

        console.log(un);
        console.log(deux);
        console.log(trois);

        $(".cont").append(`Avec JSON <br> ${un} <br>`);
        $(".cont").append(`${deux}<br>`);
        $(".cont").append(trois);
      },
      error: (xhr, status, error) => {
        console.error(`Error: ${error}`);
      },
    });
  });
});
