

//     Loop Assignment 


// Question 1



// const para = document.querySelector("#para");

// for ( i = 1 ; i <= 5 ; i++){
//     console.log(` Hello World ${i} `);
//     para.innerHTML +=  ` ${i}).  Hello World  <br /> `;
// }





// Question 2 

// const para = document.querySelector("#para");

// for ( i = 1 ; i <= 10 ; i++){
//     console.log(` ${i} `);
//     para.innerHTML +=  ` ${i} <br /> `;

// }




// Question 3


// const tablenumber = +prompt("Enter table number");
// const lengthnumber = +prompt("Enter table length");
// const head = document.querySelector('#head');
// const para = document.querySelector("#para");

// for ( let  i = 1 ; i <= lengthnumber ; i++){
//     console.log(`${tablenumber} * ${i} = ${tablenumber * i }`);
//     head.innerHTML = `Multiplication table of ${tablenumber} <br /> Length ${lengthnumber} `;
//     para.innerHTML += `${tablenumber} * ${i} = ${tablenumber * i } <br />`;

// }


// Q 4 Done 


// const array = [ "Nokia" , "Samsung" , "Apple" , "Sony" , "Huawei"];


// for ( let i = 0; i  < array.length ; i++  ){
//     console.log(`${array[i]}`);
//     para.innerHTML += ` ${array[i]} <br />`;
// }





// Q 5 done 


// const fruit =["apple","banana","mango","orange","strawberry"];


// for ( let i = 0 ; i < fruit.length ; i ++){
//     console.log(` ${fruit[i]} `);
//     head.innerHTML += `${fruit[i]} <br />`;
//     para.innerHTML += `Element at index ${i} is a ${fruit[i]}  <br />`;
// }



// Q 6   


// let itemValue = +prompt("Enter number of items");
// const h1 = document.querySelector("h1");
// const ol = document.querySelector("ol");
// const indexValue = [];

// function itemsValue() {
//     h1.innerHTML = ` Number of items: ${itemValue} <br /> Items :`;
//     ol.innerHTML = ``;

//     for ( let i = 0; i < itemValue ; i++){
//         indexValue.push(prompt("Enter value for index " + i));
//         ol.innerHTML += `<li>${indexValue[i]} <br /> </li> `;
//     }
// }

// itemsValue()





// QUestion  7


// Counting 

// for ( i = 1 ; i <= 15 ; i++){
//     console.log(i);
//     head.innerHTML = `Counting:`;
//     para.innerHTML += `${i} , `;
// }

// Reverse Counting 

// for ( i = 10 ; i > 0 ; i--){
//     console.log(i);
//     head.innerHTML = `Reverse Counting:`;
//     para.innerHTML += `${i} , `;

// }


// Even Number

// for ( let i = 0 ; i <= 10 ; i++ ) {
//     const Even = i * 2;
//     console.log(Even);
//     head.innerHTML = `Even :`;
//     para.innerHTML += `${Even} , `;
    
// }

// Odd Number

// for ( let i = 0 ; i <= 20 ; i++ ) {
//     if( i % 2 ){
//     console.log(i);
//     head.innerHTML = `Odd :`;
//     para.innerHTML += `${i} , `;

//     }
    
// }


// Series

// for ( let i = 1 ; i <= 10 ; i++ ) {
//     const series = i * 2;
//     console.log(series);
//     head.innerHTML = `Series :`;
//     para.innerHTML += `${series}k , `;
    
// }



// QUestion  8

// const itemsList = [ "cake","apple pie","cookies","chips","patties"];
// const itemdemands = prompt("Welcome to Abc bakery\nWhat do you want to order sir/ma'am ");

// for ( let i = 0 ; i < itemsList.length; i++){
//     if(itemsList[i] === itemdemands){
//         para.innerHTML = `${itemdemands} is Available at index ${itemsList.indexOf(itemdemands)} in our bakery`;

//     }

// }




// Question  9


// const array =  [ 24 , 53 , 78 , 91 ,12];
// let   largerNumber = Math.max(...array);

// for ( let i = 0; i < array.length ; i++){
//     head.innerHTML = `Array items : ${array} `;
//     para.innerHTML = `The largest number is ${largerNumber} `;

// }




// Question  10

// const array =  [ 24 , 53 , 78 , 91 ,12 ];
// let   largerNumber = Math.min(...array);

// for ( let i = 0; i < array.length ; i++){
//     head.innerHTML = `Array items : ${array} `;
//     para.innerHTML = `The smallest number is ${largerNumber} `;

// }





//  Question 11

// const array =  [ 24 , 53 , 78 , 91 ,12 ];
// let smallestNumber = Math.min(...array);
// let largestNumber =  Math.max(...array);

// for ( let i = 0; i < array.length ; i++){
//     head.innerHTML = `Array items : ${array} `;
//     para.innerHTML = `The smallest number is ${smallestNumber} `;
//     para1.innerHTML = `The largest number is ${largestNumber} `;


// }





//  Question 12

// for ( let i = 1 ; i <= 100; i++){
//     if( i % 5 === 0){
//     console.log(`${i}`);
//     para.innerHTML += ` ${i},`;


//     }
// }





//  Question 13







//  Question 14


// var scores = [12, 45, 3, 22, 34, 50];
// var ask = +prompt("enter your value where to stop");
// let stopValue = scores.indexOf(ask);


// // for (i=0; i<scores.length; i++){
//     console.log(scores.slice(0,stopValue+1));
// // }





//  Question 15


// var number  = [ [1,2,3] , [4,5,6] , [7,8,9] ];
// for (i=0; i<number.length; i++){
//     document.write(number[0]+"<br/>");

//     for (i=0; i<number.length; i++){
//         document.write(number[1]+"<br/>");

//         for(i=0; i<number.length; i++){
//             document.write(number[2]);
            
//             for(i=0; i<number.length; i++){
//             }
//         }
//     }
// }






//  Question 16

// let value = +prompt("Enter your value") ;

// for ( i = value ; i >= 0 ; i--){
//     para.innerHTML += ` ${i} , ${i - 0.5} ,`;
// }





//  Question  17


// for ( let i = 0; i <= % 20; i++){
//     if (i === 0){
//         console.log( i + " is even");
//     para.innerHTML += ` ${i} is even <br />`;


//     }
//     else if(i % 2 === 0){
//         console.log( i + " is even");
//     para.innerHTML += ` ${i} is even <br />`;

//     }

//     else{
//         console.log( i + " is odd");
//     para.innerHTML += ` ${i} is Odd <br />`;

//     }

// }






//  Question  18



// function numbers (arr){
//     odd = 1;
//     for (let i = 0 ; i < arr.length; i++){
//     if (arr[i] % 2  );
//         // console.log(arr[i]);
//         odd = odd * arr[i];
//         console.log(odd);
//     }
// }
// number = [1,2,3,4,5,6,7,];
// numbers(number);
// para.innerHTML += (`The product of the odd integers from ${number[0]} to ${number[6]} is :   ` + odd );



//  Question  19




// let star = [" * "];
// for (let i = 0; i < 7; i++){
//     console.log(`${star}`);
//     star.push(star[0]);
//     para.innerHTML += `${star} <br /> `;
// }




// Question 20


// var ask = +prompt("enter your value");
// let star = [" * "];
// for (i=1; i<=ask; i++){
//     console.log(`${star}`);
//     star.push(star[0]);
// }















