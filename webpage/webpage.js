// Reference submit button function
$("#sub").click(function() {
  let author = authorNameFormat();
  let publishYear = $("#publishYear").val();
  let title = $("#title").val();
  let url = $("#url").val();
  let accessDate = formatAccessDate();
  let reference = author + " (" + publishYear + ") " + "<i>" + title + "</i>. Availiable at: " + url + " (Access Date: " + accessDate + ")";
  $("#reference").html(reference);
});

// Add author function
$("#add_button").click(function() {
  $(".wrapper").append('<div><input type="text" class="author"/><button class="delete">Delete</button></div>');
});

// Delete author input field function
$(".wrapper").on("click", ".delete", function() {
  $(this).parent("div").remove();
});

function addnewAuthor(author1, author2) {
  return author1 + author2;
}

// Access date formatter BEGIN
function formatAccessDate() {
  // main variables for this function
  let year = "";
  let month = "";
  let day = "";
  let englishMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // input format yyyy-mm-dd  
  let date = $("#accessDate").val();
  // get year from input
  year = date.substring(0, 4);
  //get month from input
  month = date.substring(5, 7);
  switch (month) {
    case "01":
      month = englishMonthNames[0];
      break;
    case "02":
      month = englishMonthNames[1];
      break;
    case "03":
      month = englishMonthNames[2];
      break;
    case "04":
      month = englishMonthNames[3];
      break;
    case "05":
      month = englishMonthNames[4];
      break;
    case "06":
      month = englishMonthNames[5];
      break;
    case "07":
      month = englishMonthNames[6];
      break;
    case "08":
      month = englishMonthNames[7];
      break;
    case "09":
      month = englishMonthNames[8];
      break;
    case "10":
      month = englishMonthNames[9];
      break;
    case "11":
      month = englishMonthNames[10];
      break;
    case "12":
      month = englishMonthNames[11];
      break;
  }
  day = date.substring(8, 10);
  return day + " " + month + " " + year;
}
// Access date formatter ENG


// Authro name formatter BEGIN
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
      let cap = lastName.charAt(0).toUpperCase();
      lastName = lastName.slice(1);
      lastName = cap + lastName;
    }
  }
  let finalName = lastName + "." + firstName + " ";
  return finalName;
}
// Author name formatter END
