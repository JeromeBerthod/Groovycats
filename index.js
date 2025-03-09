// Utilisation de emailJS

function sendMail(){

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    if (document.getElementById("name").value === "") {
        alert("Entrez votre nom svp");
        document.getElementById("name").focus();
    }

    if (!emailIsValid(document.getElementById("email").value)) {
        alert("Entrez un email valide svp");
        document.getElementById("email").focus();
    }

    const serviceID = "service_5zwrmpo";
    const templateID = "template_m5adsbo";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Votre message a été envoyé avec succès");
            })
        .catch((err) => console.log(err));
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
    
