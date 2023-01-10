
function subscribe(){
    
    let text=document.getElementById('txt').value
    let text1=document.getElementById('txt1').value
    if(text1==0){
           window.alert('Your password is required to verify you!')
        }else if(text==0){
        window.alert('Enter your email in form provided below.')
    }else{
        document.getElementById("myButton").onclick = function () {
            location.href = "end.html";
    }
    
}
}