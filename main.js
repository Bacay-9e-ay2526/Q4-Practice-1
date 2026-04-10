function Agecheck() {
    let age = document.getElementById("edad").value;

    if (Number(age) >= 18) {
        document.getElementById("Ans").innerHTML="Status: You're eligible to vote"
    }

    else {
        document.getElementById("Ans").innerHTML="Status: You're still a minor"
    }

}