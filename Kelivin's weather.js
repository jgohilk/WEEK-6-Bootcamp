
var goToWork
function kelvin (temperature, condition){
    if(temperature >= 10){
        switch(condition){
            case "sunny":
                goToWork = true
                break;
            case "cloudy":
                goToWork = true
                break;
            case"raining":
                goToWork = false
                break;
            case "snowing":
                goToWork = false
                break;
            case "thunder":
                goToWork = false
                break;
            }
    }
    if(temperature > 20 && temperature < 31){
        switch(condition){
            case "sunny":
                goToWork = true
                break;
            case "cloudy":
                goToWork = true
                break;
            case "raining":
                goToWork = true
                break;
            case "snowing":
                goToWork = false
                break;
            case "thunder":
                goToWork = false
                break;
        }
    }    
    if(temperature > 30){
        switch(condition){
            case "sunny":
                goToWork = false
                break;
            case "cloudy":
                goToWork = false
                break;
            case "raining":
                goToWork = false
                break;
            case "snowing":
                goToWork = false
                break;
            case "thunder":
                goToWork = false
                break;
            }
        }    
    if(temperature < 10){
        switch(condition){
            case "sunny":
            goToWork = false
            break;
        case "cloudy":
            goToWork = false
            break;
        case "raining":
            goToWork = false
            break;
        case "snowing":
            goToWork = false
            break;
        case "thunder":
            goToWork = false
            break;
        }
    }
            console.log(goToWork)

} let x = kelvin(10,"sunny")