function swap(el1,el2) {
    const style1 = window.getComputedStyle(el1); 
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height"); 
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2; 
    el2.style.height = transform1;
    } ;


async function insertionSort() {
    let i ;
    algo.innerHTML = "INSERTION SORT" ;
    disableFunc() ;
    for(i=0;i<arr.length;i++)
    {
        swap(arr[i],arr[i]);
    }
    let j ;
    let key ;
    for (i = 1; i < arr.length; i++)
    {
        arr[i].style.background = "rgba(231, 183, 78, 0.856)" ;
        if(i!=arr.length-1)
            arr[i+1].style.background = "#dc3545" ;
        key = parseFloat(arr[i].style.height) ;
        j = i - 1;
        while (j >= 0 && (parseFloat(arr[j].style.height) > key))
        {
            swap(arr[j+1],arr[j]) ;
            await new Promise(resolve => setTimeout(() => {resolve();},1));
            j = j - 1;
        }
        
    }
    for(let i=0;i<arr.length;i++)
    {
        arr[i].style.background = "#198754" ;
    }
    enableFunc() ;
    
} ;

let insertion = document.getElementsByClassName("insertion-sort") ;



insertion[0].addEventListener('click',()=>{
    insertionSort() ;
});