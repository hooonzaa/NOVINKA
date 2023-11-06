function Spočítej(){

    const Weight= parseFloat(document.getElementById('Weight').value)
    const  Height = parseFloat(document.getElementById('Height').value)
   
     const output= Weight /(Height * Height)

    document.getElementById("BMI").innerHTML = output

if ( Weight <= 18,5 ) {
    document.getElementById("BRR").textContent= "podváha"

    }
}