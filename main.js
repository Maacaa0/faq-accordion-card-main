const click1 = document.getElementById("head1"); 
const click2 = document.getElementById("head2");
const click3 = document.getElementById("head3");                //Clickable headings
const click4 = document.getElementById("head4");
const click5 = document.getElementById("head5");

const allHeadings = document.querySelectorAll(".click-me");     //Clickable headings all in 1

const allPars = document.querySelector(".par")                   //All paragraphs in 1

const par1 = document.getElementById("par1");
const par2 = document.getElementById("par2");
const par3 = document.getElementById("par3");                   //Paragraphs to be opened 
const par4 = document.getElementById("par4");
const par5 = document.getElementById("par5");

const one = document.getElementById("a1");
const two = document.getElementById("a2");
const three = document.getElementById("a3");                       //Arrows to turn upside down
const four = document.getElementById("a4");
const five = document.getElementById("a5");



click1.addEventListener("click", toggle1);
click2.addEventListener("click", toggle2);
click3.addEventListener("click", toggle3);
click4.addEventListener("click", toggle4);
click5.addEventListener("click", toggle5);



function toggle1() {
    if (par1.style.display === "none") {
        return par1.style.display = "block",
                click1.style.fontWeight = "bold",
                 one.style.transform = "rotate(180deg)",
                  par2.style.display = "none",
                  two.style.transform = "rotate(360deg)",
                  click2.style.fontWeight = "400",
                  par3.style.display = "none",
                  three.style.transform = "rotate(360deg)",
                  click3.style.fontWeight = "400",
                  par4.style.display = "none",
                  four.style.transform = "rotate(360deg)",
                  click4.style.fontWeight = "400",
                  par5.style.display = "none",
                  five.style.transform = "rotate(360deg)",
                  click5.style.fontWeight = "400"

    } else {
        return par1.style.display = "none",
                click1.style.fontWeight = "400",
                 one.style.transform = "rotate(360deg)"
    }
}

function toggle2() {
    if (par2.style.display === "none") {
        return par2.style.display = "block",
                click2.style.fontWeight = "bold",
                two.style.transform = "rotate(180deg)",
                par1.style.display = "none",
                one.style.transform = "rotate(360deg)",
                click1.style.fontWeight = "400",
                par3.style.display = "none",
                three.style.transform = "rotate(360deg)",
                click3.style.fontWeight = "400",
                par4.style.display = "none",
                four.style.transform = "rotate(360deg)",
                click4.style.fontWeight = "400",
                par5.style.display = "none",
                five.style.transform = "rotate(360deg)",
                click5.style.fontWeight = "400"
                  
    } else {
        return par2.style.display = "none",
                click2.style.fontWeight = "400",
                 two.style.transform = "rotate(360deg)"
    }
}

function toggle3() {
    if (par3.style.display === "none") {
        return par3.style.display = "block",
                click3.style.fontWeight = "bold",
                 three.style.transform = "rotate(180deg)",
                 par2.style.display = "none",
                  two.style.transform = "rotate(360deg)",
                  click2.style.fontWeight = "400",
                  par1.style.display = "none",
                  one.style.transform = "rotate(360deg)",
                  click1.style.fontWeight = "400",
                  par4.style.display = "none",
                  four.style.transform = "rotate(360deg)",
                  click4.style.fontWeight = "400",
                  par5.style.display = "none",
                  five.style.transform = "rotate(360deg)",
                  click5.style.fontWeight = "400"
    } else {
        return par3.style.display = "none",
                click3.style.fontWeight = "400",
                 three.style.transform = "rotate(360deg)"
    }
}

function toggle4() {
    if (par4.style.display === "none") {
        return par4.style.display = "block",
                click4.style.fontWeight = "bold",
                 four.style.transform = "rotate(180deg)",
                 par2.style.display = "none",
                  two.style.transform = "rotate(360deg)",
                  click2.style.fontWeight = "400",
                  par3.style.display = "none",
                  three.style.transform = "rotate(360deg)",
                  click3.style.fontWeight = "400",
                  par1.style.display = "none",
                  one.style.transform = "rotate(360deg)",
                  click1.style.fontWeight = "400",
                  par5.style.display = "none",
                  five.style.transform = "rotate(360deg)",
                  click5.style.fontWeight = "400"
    } else {
        return par4.style.display = "none",
                click4.style.fontWeight = "400",
                 four.style.transform = "rotate(360deg)"                 
    }
}

function toggle5() {
    if (par5.style.display === "none") {
        return par5.style.display = "block",
                click5.style.fontWeight = "bold",
                 five.style.transform = "rotate(180deg)",
                  par2.style.display = "none",
                  two.style.transform = "rotate(360deg)",
                  click2.style.fontWeight = "400",
                  par3.style.display = "none",
                  three.style.transform = "rotate(360deg)",
                  click3.style.fontWeight = "400",
                  par4.style.display = "none",
                  four.style.transform = "rotate(360deg)",
                  click4.style.fontWeight = "400",
                  par1.style.display = "none",
                  one.style.transform = "rotate(360deg)",
                  click1.style.fontWeight = "400"
    } else {
        return par5.style.display = "none",
                click5.style.fontWeight = "400",
                 five.style.transform = "rotate(360deg)"
    }
}

