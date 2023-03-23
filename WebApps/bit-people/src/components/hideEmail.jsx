export const hideEmail = (email) => {
        
    const replaceCharacter = "...";
    let hidden1 = "";
    let hidden2 = "";
    const splittedEmail = email.split('@');
    // console.log(email);
    const leftSide = splittedEmail[0];

    for (var i = 0; i < leftSide.length; i++) {
        
        if(i < 3) {
            hidden1 += leftSide[i];
        } 
        if(i > leftSide.length - 4) {
            hidden2 += leftSide[i];
        }
    }  
    return hidden1 + replaceCharacter + hidden2 + "@" + splittedEmail[1];
}