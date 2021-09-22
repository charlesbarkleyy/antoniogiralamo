//for loop to create new color scheme

const colorPicker = function(){
    let x = document.getElementsByClassName('newcolor')
    let hex = (Math.random() * 0xfffff * 1000000).toString(16);
    hex = '#' + hex.slice(0, 6);
    for ( i =0; i<= x.length; i++){
        x[i].style.backgroundColor = hex;
    }
}
