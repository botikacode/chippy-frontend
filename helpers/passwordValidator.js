export function passwordValidator(password) {
  if (!password) return "La contraseña no puede estar vacío."
  if (password.length < 3) return 'La contraseña debe tener mínimo 3 caracteres.'
  return ''
}
