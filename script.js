

function removePlaceholder(inputElement) {
    inputElement.placeholder = '';  // Remove o placeholder
}

function restorePlaceholder(input, restoreinput ){
    if(input.value === ''){
        input.placeholder = restoreinput
        
    }
}



