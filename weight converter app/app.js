function height(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the height in centimeters';
    document.querySelector('#card1').textContent ='OUTPUT IN FEETS:';
    document.querySelector('#card2').textContent ='OUTPUT IN INCHES:';
    document.querySelector('#card33').style.display = 'none';
    document.querySelector('#main').textContent = 'Height';
    document.querySelector('#main2menu').innerHTML=`
                    <button href="" onclick="heightinfeets()" class="dropdown-item">(Input) feets</button>
                    <button href="" onclick="heightininches()" class="dropdown-item">(Input) inches</button>
                    `;
    document.querySelector('#main2').textContent = 'Input (centimeters)';
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var centimeters = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = centimeters/2.54
        document.querySelector('#kgoutput').innerHTML = centimeters/30.48
        
    })
}
function weight(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the weight in pounds';
    document.querySelector('#card1').textContent ='KG OUTPUT:';
    document.querySelector('#card2').textContent ='GRAM OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='OUNCES OUTPUT:';
    document.querySelector('#main').textContent = 'Weight';
    document.querySelector('#main2').textContent = 'Input (pounds)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="weightinkgs()" class="dropdown-item">(Input) kg</button>
            <button href="" onclick="weightingrams()" class="dropdown-item">(Input) gram</button>
            <button href="" onclick="weightinounces()" class="dropdown-item">(Input) ounces</button>
            <button href="" onclick="weight()" class="dropdown-item">(Input) pounds</button>
        
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var pounds = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = pounds/0.0022046
        document.querySelector('#kgoutput').innerHTML = pounds*0.45359267
        document.querySelector('#ozoutput').innerHTML = pounds*16
    })
}
function temperature(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the temperature in degree celcius';
    document.querySelector('#card1').textContent ='KELVIN OUTPUT:';
    document.querySelector('#card2').textContent ='FAHRENHEIT OUTPUT:';
    document.querySelector('#card33').style.display = 'none';
    
    document.querySelector('#main').textContent = 'Temperature';
    document.querySelector('#main2').textContent = 'Input (Degree Celcius)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="temperatureinkelvin()" class="dropdown-item">(Input) kelvin</button>
            <button href="" onclick="temperatureinfh()" class="dropdown-item">(Input) fahrenheit</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var celcius = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML =(celcius*1.8)+32;
        document.querySelector('#kgoutput').innerHTML =  (celcius*1)+273.15;
        
    })
}
function time(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the time in hours';
    document.querySelector('#card1').textContent ='seconds OUTPUT:';
    document.querySelector('#card2').textContent ='minutes OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='days OUTPUT:';
    document.querySelector('#main').textContent = 'Time';
    document.querySelector('#main2').textContent = 'Input (hours)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="timeinminutes()" class="dropdown-item">(Input) minutes</button>
            <button href="" onclick="timeinseconds()" class="dropdown-item">(Input) seconds</button>
            <button href="" onclick="timeindays()" class="dropdown-item">(Input) days</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var hours = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = hours*60;
        document.querySelector('#kgoutput').innerHTML = hours*3600;
        document.querySelector('#ozoutput').innerHTML = hours/24;
        
    })
}
function timeinminutes(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the time in minutes';
    document.querySelector('#card1').textContent ='seconds OUTPUT:';
    document.querySelector('#card2').textContent ='hours OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='days OUTPUT:';
    document.querySelector('#main').textContent = 'Time';
    document.querySelector('#main2').textContent = 'Input (minutes)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="time()" class="dropdown-item">(Input) hours</button>
            <button href="" onclick="timeinseconds()" class="dropdown-item">(Input) seconds</button>
            <button href="" onclick="timeindays()" class="dropdown-item">(Input) days</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var minutes = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = minutes/60;
        document.querySelector('#kgoutput').innerHTML = minutes*60;
        document.querySelector('#ozoutput').innerHTML = minutes/1440;
        
    })
}
function timeinseconds(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the time in seconds';
    document.querySelector('#card1').textContent ='minutes OUTPUT:';
    document.querySelector('#card2').textContent ='hours OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='days OUTPUT:';
    document.querySelector('#main').textContent = 'Time';
    document.querySelector('#main2').textContent = 'Input (seconds)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="time()" class="dropdown-item">(Input) hours</button>
            <button href="" onclick="timeinminutes()" class="dropdown-item">(Input) minutes</button>
            <button href="" onclick="timeindays()" class="dropdown-item">(Input) days</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var seconds = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = seconds/3600;
        document.querySelector('#kgoutput').innerHTML = seconds/60;
        document.querySelector('#ozoutput').innerHTML = seconds/86400;
        
    })
}
function timeindays(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the time in days';
    document.querySelector('#card1').textContent ='minutes OUTPUT:';
    document.querySelector('#card2').textContent ='hours OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='seconds OUTPUT:';
    document.querySelector('#main').textContent = 'Time';
    document.querySelector('#main2').textContent = 'Input (days)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="time()" class="dropdown-item">(Input) hours</button>
            <button href="" onclick="timeinminutes()" class="dropdown-item">(Input) minutes</button>
            <button href="" onclick="timeinseconds()" class="dropdown-item">(Input) seconds</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var days = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = days*24;
        document.querySelector('#kgoutput').innerHTML = days*3600;
        document.querySelector('#ozoutput').innerHTML = days*86400;
        
    })
}
function temperatureinkelvin(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the temperature in kelvin';
    document.querySelector('#card1').textContent ='DEGREE CELCIUS OUTPUT:';
    document.querySelector('#card2').textContent ='FAHRENHEIT OUTPUT:';
    document.querySelector('#card33').style.display = 'none';
    
    document.querySelector('#main').textContent = 'Temperature';
    document.querySelector('#main2').textContent = 'Input (kelvin)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="temperature()" class="dropdown-item">(Input) degree Celcius</button>
            <button href="" onclick="temperatureinfh()" class="dropdown-item">(Input) fahrenheit</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var kelvin = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML =((kelvin - 273.15) * 1.8) + 32;
        document.querySelector('#kgoutput').innerHTML =  (kelvin*1)-273.15;
        
    })
}
function temperatureinfh(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the temperature in fahrenheit';
    document.querySelector('#card1').textContent ='DEGREE CELCIUS OUTPUT:';
    document.querySelector('#card2').textContent ='KELVIN OUTPUT:';
    document.querySelector('#card33').style.display = 'none';
    
    document.querySelector('#main').textContent = 'Temperature';
    document.querySelector('#main2').textContent = 'Input (fahrenheit)';
    document.querySelector('#main2menu').innerHTML=`
            <button href="" onclick="temperature()" class="dropdown-item">(Input) degree Celcius</button>
            <button href="" onclick="temperatureinfh()" class="dropdown-item">(Input) kelvin</button>
                    `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var f = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML =((f - 32) * 0.55556) + 273.15; 
        document.querySelector('#kgoutput').innerHTML =  ((f*1)-32)*0.55556;
        
    })
}
function weightinkgs(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the weight in kg';
    document.querySelector('#card1').textContent ='POUNDS OUTPUT:';
    document.querySelector('#card2').textContent ='GRAM OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='OUNCES OUTPUT:';
    document.querySelector('#main').textContent = 'Weight';
    document.querySelector('#main2').textContent = 'Input (kg)';
    document.querySelector('#main2menu').innerHTML=`
                
        <button href="" onclick="weightinkgs()" class="dropdown-item">(Input) kg</button>
        <button href="" onclick="weightingrams()" class="dropdown-item">(Input) gram</button>
        <button href="" onclick="weightinounces()" class="dropdown-item">(Input) ounces</button>
        <button href="" onclick="weight()" class="dropdown-item">(Input) pounds</button>
                            `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var kg = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = kg*1000;
        document.querySelector('#kgoutput').innerHTML = kg*2.2046;
        document.querySelector('#ozoutput').innerHTML = kg*35.2739
    })
}

function weightingrams(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the weight in grams';
    document.querySelector('#card1').textContent ='POUNDS OUTPUT:';
    document.querySelector('#card2').textContent ='KG OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='OUNCES OUTPUT:';
    document.querySelector('#main').textContent = 'Weight';
    document.querySelector('#main2').textContent = 'Input (grams)';
    document.querySelector('#main2menu').innerHTML=`
        <button href="" onclick="weightinkgs()" class="dropdown-item">(Input) kg</button>
        <button href="" onclick="weightingrams()" class="dropdown-item">(Input) gram</button>
        <button href="" onclick="weightinounces()" class="dropdown-item">(Input) ounces</button>
        <button href="" onclick="weight()" class="dropdown-item">(Input) pounds</button>
                `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var gram = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = gram/1000;
        document.querySelector('#kgoutput').innerHTML = gram/453.59237;
        document.querySelector('#ozoutput').innerHTML = gram/28.3495231;
    })
}
function weightinounces(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the weight in ounces';
    document.querySelector('#card1').textContent ='POUNDS OUTPUT:';
    document.querySelector('#card2').textContent ='KG OUTPUT:';
    document.querySelector('#card33').style.display = '';
    document.querySelector('#card3').textContent ='GRAM OUTPUT:';
    document.querySelector('#main').textContent = 'Weight';
    document.querySelector('#main2').textContent = 'Input (OUNCES)';
    document.querySelector('#main2menu').innerHTML=`
        <button href="" onclick="weightinkgs()" class="dropdown-item">(Input) kg</button>
        <button href="" onclick="weightingrams()" class="dropdown-item">(Input) gram</button>
        <button href="" onclick="weightinounces()" class="dropdown-item">(Input) ounces</button>
        <button href="" onclick="weight()" class="dropdown-item">(Input) pounds</button>
                `;
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#ozoutput').innerHTML = '';
    
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var ocs = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = ocs/35.273962;
        document.querySelector('#kgoutput').innerHTML = ocs/16;
        document.querySelector('#ozoutput').innerHTML = ocs*28.3495231;
    })
}
function heightinfeets(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the height in feet';
    document.querySelector('#card1').textContent ='OUTPUT IN CENTIMETERS:';
    document.querySelector('#card2').textContent ='OUTPUT IN INCHES:';
    document.querySelector('#card33').style.display = 'none';
    document.querySelector('#main').textContent = 'Height';
    document.querySelector('#main2menu').innerHTML=`
                    <button href="" onclick="height()" class="dropdown-item">(Input) centimeters</button>
                    <button href="" onclick="heightininches()" class="dropdown-item">(Input) inches</button>
                    `;
    document.querySelector('#main2').textContent = 'Input (feet)';
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var feet = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = feet*12;
        document.querySelector('#kgoutput').innerHTML = feet*30.48;
        
    })
}
function heightininches(){
    document.querySelector('#weight-input').value ='';
    document.querySelector('#weight-input').placeholder ='Enter the height in inches';
    document.querySelector('#card1').textContent ='OUTPUT IN CENTIMETERS:';
    document.querySelector('#card2').textContent ='OUTPUT IN FEETS:';
    document.querySelector('#card33').style.display = 'none';
    document.querySelector('#main').textContent = 'Height';
    document.querySelector('#main2menu').innerHTML=`
                    <button href="" onclick="height()" class="dropdown-item">(Input) centimeters</button>
                    <button href="" onclick="heightinfeets()" class="dropdown-item">(Input) feets</button>
                    `;
    document.querySelector('#main2').textContent = 'Input (inches)';
    document.querySelector('#gramsoutput').innerHTML = '';
    document.querySelector('#kgoutput').innerHTML = '';
    document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
        var inch = e.target.value;
        
        document.querySelector('#gramsoutput').innerHTML = inch/12;
        document.querySelector('#kgoutput').innerHTML = inch*2.54;
        
    })
}
document.querySelector('#weight-input').addEventListener('input',(e)=>{
   
    var pounds = e.target.value;
    
    document.querySelector('#gramsoutput').innerHTML = pounds/0.0022046
    document.querySelector('#kgoutput').innerHTML = pounds*0.45359267
    document.querySelector('#ozoutput').innerHTML = pounds*16
})




