(function(){
    emailjs.init("58LMD5wfmkCRySOTS");
 })();
document.getElementById("send").addEventListener("click", sendEmail)

function sendEmail() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const question = document.getElementById("question").value

    if(email === "" || !document.getElementById("email").validity.valid){
        alert("Write email")
        return
    }

    if(question === ""){
        alert("Write question")
        return
    }

    const templateParams = {
        from_name: name,
        user_email: email,
        question: question
    }

    emailjs.send('service_ap0su0h', 'template_b0v0anf', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response)
    }, function(error) {
       console.log('FAILED...', error)
    })
}