const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")
let inputEl = document.getElementById("input")
function generatePassword(){
    let p1 = ""
    let p2 = ""
    for (let i=0 ; i < inputEl.value ; i++){
        p1 += characters[Math.floor(Math.random()*characters.length)]
        p2 += characters[Math.floor(Math.random()*characters.length)]
    }
    pass1.textContent = p1
    pass2.textContent = p2
}

function copyDivToClipboard(e) {
 let range = document.createRange();
 range.selectNode(document.getElementById(e));
 window.getSelection().removeAllRanges(); // clear current selection
 window.getSelection().addRange(range); // to select text
 document.execCommand("copy");
 window.getSelection().removeAllRanges();// to deselect
 alert("Copied to clipboard");
}