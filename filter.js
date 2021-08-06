// filter also is method which work on array

//it take function as argumet whic work as condition 

//in filter return that value whic is true 

let arr=[1,2,3,4,5];
function isEven(x){
return x%2==0;
}


let ans=arr.filter(isEven);
 console.log("original array :" , arr);
 console.log("Map answer :",ans);



 function coustumFilterFunction(arr,fun){
    let coustum=[];
    for(let i=0;i<arr.length;i++){
    if(fun(arr[i])){
        coustum.push(arr[i]);
    }
     }
    return coustum;
    
    }

    console.log(" Coustum filter answer :",coustumFilterFunction(arr,isEven));