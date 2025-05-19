// const isVerified = false ;

// if( isVerified == true ){
//     console.log('User is verified')
// }
// else{
//     console.log('User is not verified')
// }

// console.log(`${ isVerified === true ? "User is verified": "User is not verified" }`)

// function getTimeString(time){
//     // get Hour and rest seconds
//     const hour = parseInt(time / 3600) ;
// let reminigSeconds = time % 3600 ;
// const minute = parseInt(reminigSeconds / 60) ;
//  let seconds = reminigSeconds % 60 ;
// return `${hour} hour ${minute} mitute ${seconds} seconds ago` ;

// }
// console.log(getTimeString(7865))


function getTimeString(time){
    let hours = parseInt( time / 3600 ) ;
 let minute = parseInt( (time % 3600) / 60 ) ;
 let seconds = time % 60 ;
 return ` ${hours}  Hour ${ minute} minuti ${seconds} seconds ago`
}
console.log(getTimeString(75454))