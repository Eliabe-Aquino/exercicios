function header(elemento) {
   let headerCont = document.getElementById('header-container')
    headerCont.style.backgroundColor = elemento;
}
header('#00b069')

function backSection(elemento) {
 let  backGround = document.getElementsByClassName("emergency-tasks")[0]
 console.log(backGround)
 backGround.style.backgroundColor = elemento;
}

backSection('#ff9f84')

    function backSection2(elemento) {
    let  backGround = document.getElementsByClassName("no-emergency-tasks")[0]
    console.log(backGround)
    backGround.style.backgroundColor = elemento;
   }
   
   backSection2('#f8db5e')

   function backh3(elemento, index,) {
    let  backGround = document.querySelectorAll(".emergency-tasks div h3")[index]
    console.log(backGround)
    backGround.style.backgroundColor = elemento;
   }
   backh3("#a531f3", 0)
   backh3("#a531f3", 1)

   
   function backh3no(elemento, index,) {
    let  backGround = document.querySelectorAll(".no-emergency-tasks div h3")[index]
    console.log(backGround)
    backGround.style.backgroundColor = elemento;
   }
   backh3no("black", 0)
   backh3no("black", 1)

   function footer(elemento) {
    let footerCont = document.getElementById('footer-container')
     footerCont.style.backgroundColor = elemento;
 }
 footer('#003533')
   