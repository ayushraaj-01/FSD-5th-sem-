const mypromise=new Promise ((resolve, reject) => {
    let age =15;
    if (age >= 18) {
        resolve("You are eligible to vote.");
    }       
    else{
        reject("You are not eligible to vote.");
    }

})

const checkEligibility =  async() => {
    try{
        const msg =   await  mypromise;
        console.log(msg);
    }
    catch(error){
        console.error(error);
    }
}
checkEligibility();
// console.log(mypromise);

//1st method to handle promise:-
// mypromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error(error);
// });