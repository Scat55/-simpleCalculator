const OPERATIONS = {
    sum: '+',
    minus: '-',
    multipy: '*',
    divison: '/'
};

function calculate ({a, b, operation}){
    let result = null;

    switch (operation){
        case OPERATIONS.sum:
            result = sum(a, b);
            break;

        case OPERATIONS.minus:
            result = minus(a, b);
            break;
        
        case OPERATIONS.multipy:
            result = multiply(a, b);
            break;
        
        case OPERATIONS.divison:
            result = divison(a, b);
            break;
        
        default:
            break;
        
    }


    return result;
}