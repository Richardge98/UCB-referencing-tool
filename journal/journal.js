$("#sub").click(function () {
  let author = authorNameFormat();
  let heading = $("#journalHeading").val();
  let title = $("#title").val();
  let publishYear = $("#publishYear").val();
  let edition = $("#edition").val();
  let pageNumber = $("#pageNumber").val();
  let reference = author + " (" + publishYear + ") '" + heading + "', " + "<i>" + title + "</i>, " + edition + ", pp. " + pageNumber;
  $("#reference").html(reference);
});


// dynamic numbers of authors function add
$("#add_button").click(function () {
  $(".wrapper").append('<div><input type="text" class="author"/><button class="delete">Delete</button></div>');
});

// dynamic numbers of authors function delete
$(".wrapper").on("click", ".delete", function () {
  $(this).parent("div").remove();
});


// Format author name function BEGIN
function authorNameFormat() {
  // take all author names
  let authorNames = [];
  for (let i = 0; i < $(".author").length; i++) {
    authorNames[i] = $(".author")[i].value;
  }
  // format author names
  for (let i = 0; i < authorNames.length; i++) {
    authorNames[i] = format(authorNames[i]);
  }
  return authorNames;
}

function format(name) {
  let firstName = "";
  let lastName = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      firstName = name.substring(0, 1);
      firstName = firstName.toUpperCase();
      lastName = name.substring(i + 1,);
      let lastNameCapitalLetter = lastName.charAt(0).toUpperCase();
      lastName = lastName.slice(1);
      lastName = lastNameCapitalLetter + lastName;
    }
  }
  let finalName = lastName + "," + firstName + ". ";
  return finalName;
}
// END
