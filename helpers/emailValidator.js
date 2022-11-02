export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "El Email no puede estar vacío."
  if (!re.test(email)) return 'Ooops! El email es no es válido.'
  return ''
}
