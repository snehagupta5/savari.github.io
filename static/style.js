console.log("welcome to Rapido");
btnone=()=>{
    document.getElementById("fivepageBoxe1").style.display="block";
    document.getElementById("fivepageBoxe2").style.display="none";
    document.getElementById("bg-y").style.backgroundColor="#f9c935";
    document.getElementById("bg-w").style.backgroundColor="white";
  
    

}
 btntwo = () => {
    document.getElementById("fivepageBoxe2").style.display = "block";
    document.getElementById("fivepageBoxe1").style.display = "none";
    document.getElementById("bg-y").style.backgroundColor = "white";
    document.getElementById("bg-w").style.backgroundColor = "#f9c935";
};
btnthree=()=>{
    document.getElementById("hide_one_card").style.display="block";
    document.getElementById("hide_two_card").style.display="none";
    document.getElementById("Bg-y").style.backgroundColor="#f9c935";
    document.getElementById("Bg-w").style.backgroundColor="white";
  
    

}
 btnfour = () => {
    document.getElementById("hide_two_card").style.display = "block";
    document.getElementById("hide_one_card").style.display = "none";
    document.getElementById("Bg-y").style.backgroundColor = "white";
    document.getElementById("Bg-w").style.backgroundColor = "#f9c935";
};

var  download = document.querySelector(".download");
const dwnld_app=()=>{
   console.log(download);
    download.classList.add("blackscreen");
    document.querySelector("body").style.overflowY="hidden";
}
var closetab = document.querySelector(".closetab");
closetab.addEventListener("click",()=>{
    download.classList.remove("blackscreen");
    document.querySelector("body").style.overflowY="scroll";
})



var  Sign_up = document.querySelector(".sign-up");
const SignUp =()=>{
   console.log(Sign_up);
   Sign_up.classList.add("blackscreen");
    document.querySelector("body").style.overflowY="hidden";

}
var close = document.querySelector(".close");
close.addEventListener("click",()=>{
    Sign_up.classList.remove("blackscreen");
    document.querySelector("body").style.overflowY="scroll";
})








