console.log(decryptPassword("Yusuf Agung"))
function decryptPassword(plain_password){
    let encrypted_password = ReplaceSpace(plain_password)
    encrypted_password = ReverseText(encrypted_password)
    encrypted_password = MoveVocalToNextLetter(encrypted_password)
    return encrypted_password
}

function ReplaceSpace(str_data){
    return str_data.replace(/ /g,"")
}
function ReverseText(str_data){
    return str_data.split("").reverse().join("")
}
function MoveVocalToNextLetter(str_data){
    const VocalMapping ={
        'a' : 'b',
        'e' : 'f',
        'i' : 'j',
        'o' : 'p',
        'u' : 'v',
        'A' : 'B',
        'E' : 'F',
        'I' : 'J',
        'O' : 'P',
        'U' : 'V'
    }
    let result =""
    for(let i = 0; i < str_data.length; i++ ){
        const huruf = str_data[i]
        if(VocalMapping[huruf]){
            result += VocalMapping[huruf]
        } else {
            result += huruf
        }
    }
    return result
}