gsap.from(".container", {y:100, delay:0.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("h1", {x:-300, delay:0.4, duration:3, opacity:0, ease:"power4.out"})
gsap.from("h3", {x:-300, delay:1.5, duration:3, opacity:0, ease:"power4.out"})
gsap.from("span", {x:300, delay:2.5, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#btn", {y:100, delay:3, duration:3, opacity:0, ease:"power4.out"})
gsap.from(".block", {y:100, delay:3.2, duration:3, opacity:0, ease:"power4.out"})

const btn= document.querySelector("#btn");


btn.addEventListener("click", calculate);

function calculate(e){
e.preventDefault();
    let people=document.querySelector("#people").value;
    let plane= document.querySelector("#plane").value;
    let train= document.querySelector("#train").value;
    let bus= document.querySelector("#bus").value;
    let taxi= document.querySelector("#taxi").value;
    let hotel= document.querySelector("#hotel").value;
    let food= document.querySelector("#food").value;
    let car= document.querySelector("#car").value;
    let fun= document.querySelector("#fun").value;


if (people<=0  || people ===" "|| plane<0 || train <0 || bus<0 || taxi<0 || hotel<0 || food<0|| car<0 ||fun<0 || isNaN(people) || isNaN(plane) || isNaN(train) || isNaN(bus) || isNaN(taxi) || isNaN(hotel) || isNaN(food) || isNaN(car) || isNaN(fun))  {
    Swal.fire({
        icon: 'error',
        title: 'Faltan datos',
        text: 'Revisa el número de viajeros y las cantidades',
        confirmButtonColor: '#f27474',
      })
return false;
}


let totalSum= + plane + + train + + bus + + taxi + + hotel + + food + + car + + fun;
totalSum=totalSum.toFixed(2);

document.querySelector("#total").textContent=totalSum;

let result= totalSum / people;
result= result.toFixed(2);

document.querySelector("#totalPerPerson").textContent= result;


}