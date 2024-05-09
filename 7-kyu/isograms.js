// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    
    let letterSet = new Set()
    const lowercaseStr = str.toLowerCase()
    const strLength = lowercaseStr.length

    // check if string is empty and return true

    if(str === "") return true;
    
    // Iterate over the string and push items to set
    for(let i=0;i<strLength;i++){

        // convert to lowercase


        // check if letter is in Set 
        if(letterSet.has(lowercaseStr[i])){ 
            return false
        }else {
            // push letter to set since it's not there yet
            letterSet.add(lowercaseStr[i])
        }
    }

    return true


}