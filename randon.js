const shuffle = (string) => {
    string = 'iehnague'
    let parts = string.split('');
    let temp = '';
    let cont = 0;
    while(temp != 'euganhei') {
        for (let i = parts.length; i > 0;) {
            let random = parseInt(Math.random() * i);
            temp = parts[--i]; 
            parts[i] = parts[random];
            parts[random] = temp;    
        }
        temp =  parts.join('');
        cont ++;
        console.log(cont);
       
    }
    return temp ;    
}
console.log(shuffle());