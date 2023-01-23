let fetchAdvice = async() =>{
    let res =await fetch("https://api.adviceslip.com/advice");
    let data =await res.json()
    
    console.log(data);

    document.getElementById("adviceNum").innerHTML=`Advice #${data.slip.id}`
    document.getElementById("text").innerHTML =`"${data.slip.advice}"`

}
fetchAdvice();