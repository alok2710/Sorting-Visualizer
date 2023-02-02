function swap(el1,el2) {
    const style1 = window.getComputedStyle(el1); 
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height"); 
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2; 
    el2.style.height = transform1;
    } ;


async function bubbleSort() {
    let i ;
    algo.innerHTML = "BUBBLE SORT" ;
    disableFunc() ;
    for(i=0;i<arr.length;i++)
    {
        swap(arr[i],arr[i]);
    }
    let j ;
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length-i-1;j++)
        {
            arr[j].style.background="#dc3545";
            arr[j+1].style.background="#dc3545" ; 
            if(parseFloat(arr[j].style.height) > parseFloat(arr[j+1].style.height))
            {
                
                swap(arr[j],arr[j+1]) ;
                
                await new Promise(resolve => setTimeout(() => {resolve();},1));
            }
            arr[j].style.background="rgba(231, 183, 78, 0.856)";
            arr[j+1].style.background="rgba(231, 183, 78, 0.856)" ;
        }
        arr[arr.length-i-1].style.background = "#198754" ;
    }
    enableFunc() ;
} ;

let bubble = document.getElementsByClassName("bubble-sort") ;
let arr = barDiv.childNodes ;



bubble[0].addEventListener('click',()=>{
    bubbleSort() ;
});