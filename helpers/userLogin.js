export function verCustom(inputEmail,inputPassword,customers) {

  customers.map((custom) => {
    console.log(custom.password);
    console.log(custom.email);
    if(custom.email === inputEmail && custom.password === inputPassword){
      console.log("xd")
      return '1'
    }
    
  });

    return '0';
}
