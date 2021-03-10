// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities (age){
    if (age < 16){
        return "You can't drive."
    }
    if (age >= 16 && age <= 17){
        return 'You can drive but not vote.'
    }
    if (age >= 18 && age <= 24){
        return 'You can vote but not rent a car.'
    }
    if (age >= 25){
        return 'You can do pretty much anything.'
    }
}


function oddIndices (arr){
    for (let i = 0; i < arr.length; i++){
        let odds = []
        let index = [i]
        if (index % 1 === 1){
            arr[i].push(odds)
            
        }return odds
        
    }
    }

function numOddValues (arr){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 1){
            count += 1
        }
        
    }return count
}

function averageStringLength (arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++ ){
        count+=arr[i].length
    }
    let average = count/arr.length
    return average 
} 


function firstPunctuationIndex(str){
    for (let i = 0; i<str.length; i++){
        if (str[i] === '!' || str[i]==='.' || str[i]==='?'){
            return [i]
            break
        }else {
            return -1
        }
    }
}

// function firstPunctuationIndex(strIndex){
//     if (strIndex === '!' || strIndex === '.' || strIndex === '?'){
//         return strIndex.findIndex(firstPunctuationIndex)
//     }
// }

function getPlace(listOfScores, newScore){
  
}



    







// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
