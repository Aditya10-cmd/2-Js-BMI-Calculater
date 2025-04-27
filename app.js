const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');
    const msg = document.querySelector('#msg');
    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height'
    }
    if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight'
    }
    else{
        const bmi = (weight / ( (height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>BMI : ${bmi}</span>`
        if(bmi <= 18.6){
            msg.innerHTML = 'Under Weight <br> Eat Something '
            msg.style.color = 'yellow'
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            msg.innerHTML = 'Normal Range <br> Perfect Champ'
            msg.style.color = '#70e000'
        }
        else{
            msg.innerHTML = 'Overweight <br> Stop eating idiot'
            msg.style.color = 'red'
        }
    }
});