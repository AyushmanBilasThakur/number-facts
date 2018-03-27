inputfield = document.getElementById("number");
outfield = document.getElementById("fact");
url = "https://numbersapi.com/"
document.getElementById("number").addEventListener("input", fun);
document.getElementById("submit").addEventListener("click", fun);

function fun(){
    outfield.style.display = "block";
    console.log(inputfield.value);
    if(inputfield.value != ""){
        urlsnd = url+inputfield.value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", urlsnd);
        xhr.onload = function(){
            if(this.status == 200){
                outfield.innerHTML = this.responseText;
            }
        }

        xhr.send();
    }
    else{
        outfield.innerHTML = ""
    }

}