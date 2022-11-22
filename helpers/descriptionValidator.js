export function descriptionValidator(description) {
    if (description.length < 20) return "Debes ingresar una descripción de al menos 20 caracteres."
    return ''
  }
  