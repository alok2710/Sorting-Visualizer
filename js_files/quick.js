function swap(el1,el2) {
    const style1 = window.getComputedStyle(el1); 
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height"); 
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2; 
    el2.style.height = transform1;
    } ;


async function selectionSort() {
    let i ;
    algo.innerHTML = "SELECTION SORT" ;
    disableFunc() ;
    for(i=0;i<arr.length;i++)
    {
        swap(arr[i],arr[i]);
    }
    let j ;
    let min_idx ;
    for (i = 0; i < arr.length-1; i++)
    {
        min_idx = i;
        for (j = i+1; j <arr.length; j++)
        {
            if (parseFloat(arr[j].style.height) < parseFloat(arr[min_idx].style.height))
                min_idx = j;

        // arr[i].style.background = "red" ;
        // arr[min_idx].style.background = "red" ;
        
        }
        arr[min_idx].style.background = "#dc3545" ;
        arr[i].style.background = "#dc3545" ;
        swap(arr[min_idx], arr[i]);
        await new Promise(resolve => setTimeout(() => {resolve();},100));
        arr[min_idx].style.background = "rgba(231, 183, 78, 0.856)" ;
        arr[i].style.background = "#198754" ;
    }
    arr[i].style.background = "#198754" ;
    enableFunc() ;
} ;

let selection = document.getElementsByClassName("selection-sort") ;



selection[0].addEventListener('click',()=>{
    selectionSort() ;
});