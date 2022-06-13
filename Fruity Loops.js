var fruits = ["Apple","Orange", "Banana","Pear","Peach","Strawbery","Cherry","Acai"]
for(let fruit in fruits ){
    let vowel = 0
    let consonants = 0
    for(let i = 0; i < fruits[fruit].length; i++){
       switch(fruits[fruit][i]){
        case 'A':
            vowel = vowel + 1
            break;
        case 'a':
            vowel = vowel + 1
            break;
        case 'E':
            vowel = vowel + 1
            break;
        case 'e':
            vowel = vowel + 1
            break;
        case 'I':
            vowel = vowel + 1
            break;
        case 'i':
            vowel = vowel + 1
            break;
        case 'O':
            vowel = vowel + 1
            break;
        case 'o':
            vowel = vowel + 1
            break;
        case 'U':
            vowel = vowel + 1
            break;
        case 'u':
            vowel = vowel + 1
            break;
            
        default:
           consonants = consonants + 1
           break;
       }
      

    }
    
console.log(`${fruits[fruit]} has ${vowel} vowels and ${consonants} consonants`);
}