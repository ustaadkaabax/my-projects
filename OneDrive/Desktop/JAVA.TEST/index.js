// // console.log("hello world");


// // sida loo daabaco pop up alert//
// // window.alert("pop up alert");


// // sida loogu yeeraa html element-ka id-giisa//
// document.getElementById("myH1").textContent = "halkaan ku qor qoraal";
// document.getElementById("myP").textContent = "halkaan ku qor qoraal";

            // tan anagaa qornay sideen variable iyo id iskugu daabici karnaa///
//    let fullName= "Abdulkadir Ahmed Kabah";
//    let age= 25;
//    let isStudent= false;
//     //   document.getElementById("myH1").textContent = fullName;
//     //   document.getElementById("myH2").textContent = age;
//     //   document.getElementById("myH3").textContent = isStudent;
//                 //   si kale //
//      document.getElementById("myH1").textContent = `my name is: ${fullNsme}`;
//       document.getElementById("myH2").textContent = `my age is= ${age}`;
//       document.getElementById("myH3").textContent = `Enrolled: ${isStudent}`;

// // sida loo beddelo style-ka element-ka//
// document.getElementById("myH1").style.color = "red";
// document.getElementById("myP").style.fontSize = "20px";


// // sida qoraal aan keydsaneen iyo variable mid ku keydsan loo console gareeyaa//
// let magac = "Ahmed";
// console.log(magac);
// console.log("magacaaga waa " + magac);
// console.log(`magacaaga waa ${magac}`);


// // tusaale kale//
// let name="Ali";
// let age=30;
// console.log(`magacaagu waa ${name} da'daaduna waa ${age}`);


// // sideen ku ogaan type-ka variable-ka?//
// console.log(typeof name);
// console.log(typeof age);

// // Baro noocyada data types-ka//
// string     *horay qaadanay*
// number     *horay qaadanay*
// boolean    *hadda ayaan qaadeynaa*

// boolean waxa uu qaataa laba value oo kaliya true or false
//     let online = true;
//     let offline = false;
// console.log( `ali is online: ${online}`);
// console.log(`farax is offline= ${offline}`)
// console.log(offline);

          //OPERATORS//
//  let students= 30;
         //  *** operators halkaan ayay ka dhacayaan***//
        //  1-arthemitc operators//
// students=students +1;
// students=students -1;
// students=students *3;
// students=students /3;
// students=students **2      jibaar waye
// students=students **3
// students=students %2     30 marki 2 loo qeybiyo maxaa haraa ah
        // hraadiga qaabkaana waad u daabici kartaa//
// let extraStudents =students %2
//  console.log(extraStudents)
    //    2.assignment operators //

// students += 1;
// students -= 1;
// .............
// students++;
// students--;
// console.log(students)

        //  operator precedence//
// let result = 1+2*3+4 **2;    si aad u fahanto midig ka bilaaw lababa mar xali
// console.log(result)

    //   how to accept user input//
              // easy way //
// let username;
// username=window.prompt("what's your user name?");
// console.log(username);       


        // professional way //
// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//         //   mahadsanid sidee ugusoo qoree //
//     document.getElementById("myH1").textContent= ("Mahadsanid")
// }


// const PI= 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick= function(){
//          radius=document.getElementById("myText").value;
//         radius=Number(radius);        ****type coversion***
//         circumference=2*PI* radius;
//         document.getElementById("myH2").textContent= circumference;
// }


//         //  counter program //
// const increaseBtn= document.getElementById("increaseBtn");
// const resetBTN= document.getElementById("resetBTN");
// const decreaseBtn= document.getElementById("decreaseBtn");
// const countLabel= document.getElementById("countLabel");
// let count=0;
// increaseBtn.onclick =function(){
//         count++;
//         countLabel.textContent=count;
// }
// resetBTN.onclick =function(){
//         count=0;
//         countLabel.textContent=count;
// }
// decreaseBtn.onclick =function(){
//         count--;
//         countLabel.textContent=count;
// }
