var formBtn = document.getElementById("btn");
formBtn.addEventListener("click", function getName(event) {
    event.preventDefault();
    var contactName = document.getElementById("contactName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var messageField = document.getElementById("messageField").value;

    //console.log(contactName, emailAddress, messageField);

    // var postName = document.getElementById("postFullName");
    // postName.innerHTML = contactName;

    document.getElementById("postFullName").innerHTML = contactName;

    var postEmail = document.getElementById("postEmail");
    postEmail.innerHTML = emailAddress;

    var postMessage = document.getElementById("postMessage");
    postMessage.innerHTML = messageField;
});

