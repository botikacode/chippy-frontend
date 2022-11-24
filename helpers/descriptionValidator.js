function descriptionValidator(description) {
    if (description.length < 10) return "Debes ingresar una descripción de al menos 10 caracteres."
    return ''
  }

function cityValidator (city) {
    if (!city) return "Debes ingresar una ciudad."
    return ''
  }
  

  export {descriptionValidator, cityValidator};