function swap(el1,el2) {
    const style1 = window.getComputedStyle(el1); 
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height"); 
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2; 
    el2.style.height = transform1;
    } ;

function partition(low,high){
    arr[high].style.background = "red" ;
    let pivot = parseFloat(arr[high].style.height); 
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++)
    {
        if (parseFloat(arr[j].style.height) < pivot)
        {
            i++;
            swap(arr[i],arr[j]);
        }
    }
    arr[high].style.background = "rgba(231, 183, 78, 0.856)" ;
    swap(arr[i + 1], arr[high]);
    arr[i+1].style.background = "#198754" ;
    return i + 1;

} ;

async function quickUtil(low,high)
{
    if (low < high)
    {
        
        let pi = partition(low, high);
        await new Promise(resolve => setTimeout(() => {resolve();},500));  
        
        await quickUtil(low, pi - 1);
        await quickUtil(pi + 1, high);
    }

} ;

async function quickSort() {
    let i ;
    algo.innerHTML = "QUICK SORT" ;
    disableFunc() ;
    for(i=0;i<arr.length;i++)
    {
        swap(arr[i],arr[i]);
    }
    
    await quickUtil(0,arr.length-1) ;
    for(i=0;i<arr.length;i++)
    {
        arr[i].style.background = "#198754" ;
    }
    enableFunc();
} ;

let quick = document.getElementsByClassName("quick-sort") ;



quick[0].addEventListener('click',()=>{
     quickSort() ;
});