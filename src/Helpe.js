const yearDiference = (year) => {
    return new Date().getFullYear()  - year
} 


const incrementMark = (mark) => {

    let increment;

    switch (mark) {
        case "europeo":
            increment = 1.30
            break;
    
        case "americano":
            increment = 1.15
            break;

        case "asiatico":
            increment = 1.05    
    }
        return increment

}


const incrementPlan = (plan) => {
    return plan == "basico" ? 1.20 : 1.50
} 

const firstUpperCase = (string) => {
 return string.at(0).toUpperCase() + string.slice(1)   
}

export {yearDiference, incrementMark, incrementPlan, firstUpperCase}