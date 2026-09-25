
function agecheck(){
    document.getElementById("age").value;
    let check;
    if (isappropriate(x) || x < 18 || x > 60) {
        check= "You are not old enough.";
    } else {
        check= "You are old enough.";
    }
    document.getElementById("demo").innerHTML = check;
    }