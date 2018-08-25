// Initialize Firebase
  var config = {
    apiKey: "AIzaSyADP7keC5rmll-LipuOCeO4F5LkMXEUeXw",
    authDomain: "portfolio-contact-390a8.firebaseapp.com",
    databaseURL: "https://portfolio-contact-390a8.firebaseio.com",
    projectId: "portfolio-contact-390a8",
    storageBucket: "portfolio-contact-390a8.appspot.com",
    messagingSenderId: "1013431144977"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submitButton").on("click", function (event) {
    event.preventDefault();

    var email = $("#emailInput").val().trim();
    var firstName = $("#firstNameInput").val().trim();
    var lastName = $("#lastNameInput").val().trim();
    var comments = $("#commentsInput").val().trim();
    var number = $("#phoneNumber").val().trim();

    var contentSubmit = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        comments: comments,
        number: number
    }

    database.ref().push(contentSubmit);

    var formClear = document.getElementById("contactForm");
    formClear.reset();
    return flase;

    alert("Thank you! I will be in contact with you shortly.")
    
   
});

$("#phoneNumber").on("change keyup paste", function () {
    var output;
    var input = $("#phoneNumber").val();
    input = input.replace(/[^0-9]/g, '');
    var area = input.substr(0, 3);
    var pre = input.substr(3, 3);
    var tel = input.substr(6, 4);
    if (area.length < 3) {
        output = "(" + area;
    } else if (area.length == 3 && pre.length < 3) {
        output = "(" + area + ")" + " " + pre;
    } else if (area.length == 3 && pre.length == 3) {
        output = "(" + area + ")" + " " + pre + "-" + tel;
    }
    $("#phoneNumber").val(output);
});
