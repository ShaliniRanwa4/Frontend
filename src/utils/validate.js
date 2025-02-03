
export const checkCompany=(company)=>{
    const isCompanyValid=/^[a-zA-Z]{3,}$/.test(company);
    if(!isCompanyValid) return 'Company is not valid';
    return null;
}
    


export const checkSignInValidateData=(emailId,password)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailId);
    if(!isEmailValid) return 'Email Id is not valid';
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
    if(!isPasswordValid) return 'Password is not valid';
    return null;
}