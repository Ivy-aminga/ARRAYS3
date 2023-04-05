//1.  Write a function that accepts an array of strings and 
// console.logs each element using a for loop.

let names =["Mideva","Aniso","Mumo","Aming'a"];
function string(names){
    for(let i=0;i<names.length;i++){
    console.log(names[i])
    }
}
string(names);

// Write a function that accepts an array of numbers and uses the forEach()
//  method to console.log each number multiplied by 2.
let nums=[10,20,30,40,50,60,70,80,90,100]
function accept(nums){
    nums.forEach((a) =>console.log(a*2)
    )}
 accept(nums);

//  / Write a function that takes in an array of numbers and consoles the first four items multiplied by 8
 //  and the last two added by 5. Console the array with the new values
 let arr1=[2,4,6,8,10,12]
 function takes(arr1){
    for(let x=0;x<4;x++){
        arr1[x]=arr1[x]*8
    }
    arr1[arr1.length -2]+=5
    arr1[arr1.length -1]+=5
    console.log(arr1)
 }
 takes(arr1)

// Write a function that takes in the following array and use a while loop 
// to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
 let arrNum=[1,2,3,4,5,6,7,8,9]
 function inside(arrNum){
    let i=0;
    while(i<arrNum.length){
        console.log(arrNum[i])
        if (i===4) {
            break;
        }
        i++
    }
 }
 inside(arrNum);

// Write a function that takes in a an array of strings and use a continue
//  statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

 let fruits=["apple","plam","banana","strawberries","kiwi"];
 function fruity(fruits){
    for(let i = 0;i < fruits.length; i++){
        if(i===2){
            continue;
        }
        console.log({"continue":fruits[i]})
     }
 }
fruity(fruits);