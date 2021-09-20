function isNumber(i) {
    return (i >= '0' && i <= '9');
}
 
function isLetter(i) {
    return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
}
 
function Brackets(parentheses){
    let is_balanced = true
    let opening = []
    let mirror = {"[": "]", "{": "}", "(": ")"}
    let previous = 3;
    let bracketsNumbers = {"[": 2, "{": 3, "(": 1}
    for (let i=0; i<=parentheses.length-1; i++){
        let p = parentheses[i]
        let b = bracketsNumbers[p]
        if("[{(".includes(p)){
            if(bracketsNumbers[p]>previous){
                is_balanced = false
                break;
            }
            else{
                previous = bracketsNumbers[p];
                opening.push(p)
            };
        }
 
        else{
            if (!opening){
                is_balanced = false
                break;
            };
            if (!isLetter(p) && !isNumber(p)){
                let current_char = opening.pop()
                if (mirror[current_char] != p){
                    is_balanced = false
                    break;
                }
            }
           
        };
    }
    if (is_balanced){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
 
    
Brackets("{asd}")
Brackets("{[(asd)]}")
Brackets("[{asd}]")
Brackets("[(asd])")
Brackets("{aaa[bbb(ccc)ddd]eee}")