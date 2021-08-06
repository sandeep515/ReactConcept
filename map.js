// Map is a method which work on Array 
// it take function as argumet and call that function on each value of Array 

let arr=[1,2,3,4,5];
function double(x){
return 2*x;
}


let ans=arr.map(double);
 console.log("original array :" , arr);
 console.log("Map answer :",ans);

function coustumMapFunction(arr,fun){
let coustum=[];
for(let i=0;i<arr.length;i++){

    coustum.push(fun(arr[i]));
}

return coustum;

}

console.log("coustum wala map :",coustumMapFunction(arr,double));
