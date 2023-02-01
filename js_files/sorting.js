var arrSize = document.getElementById("arr_sz")
const barDiv = document.getElementById("bars") ;
const algo = document.getElementById("algo-name") ;
let v = document.getElementById("value-h") ;
v.style.color = "cyan" ;
barDiv.removeChild(barDiv.firstChild);
function barmake(){
    let j ;
    let i ;
    const arr = [] ;
    for(i=0;i<arrSize.value;i++)
    {
        arr.push(Math.ceil(100*Math.random())) ;
    }
    for(j=0;j<arrSize.value;j++)
    {
        const newDiv = document.createElement("div") ;
        newDiv.style.height = `${arr[j]}%` ;
        newDiv.style.width = `${0.6*(100/arrSize.value)}%` ;
        newDiv.style.margin = `${0.2*(100/arrSize.value)}%` ;
        newDiv.classList.add("bar") ; 
        barDiv.appendChild(newDiv) ;
    }
} 

barmake() ;

const newArray = document.getElementsByClassName("new-array") ;
arrSize.addEventListener("input",()=>{
    algo.innerHTML = "" ;
    while(barDiv.firstChild)
   {
        barDiv.removeChild(barDiv.firstChild) ;
   }
   
   v.innerHTML = `Value : ${arrSize.value}` ;
   barmake() ;
});
newArray[0].addEventListener('click',()=>{
    algo.innerHTML = "" ;
   while(barDiv.firstChild)
   {
        barDiv.removeChild(barDiv.firstChild) ;
   }
   barmake() ;
}) ;

function disableFunc() {
    newArray[0].disabled = true ;
    quick[0].disabled = true ;
    merg[0].disabled = true ;
    arrSize.disabled = true ;
    selection[0].disabled = true ;
    insertion[0].disabled = true ;
    bubble[0].disabled = true ;
}

function enableFunc() {
    newArray[0].disabled = false ;
    quick[0].disabled =false ;
    merg[0].disabled = false;
    arrSize.disabled = false;
    selection[0].disabled = false ;
    insertion[0].disabled = false ;
    bubble[0].disabled = false ;
}