// export const checkValidateData=(emailId,password,firstName,lastName)=>{
//     const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailId);
//     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     const isFirstNameValid=/^[a-zA-Z]{3,}$/.test(firstName);
//     const isLastNameValid=/^[a-zA-Z]{3,}$/.test(lastName)
//     if(!isFirstNameValid) return 'First Name is not valid';
//     if(!isLastNameValid) return 'Last Name is not valid';
//     if(!isEmailValid) return 'Email Id is not valid';
//     if(!isPasswordValid) return 'Password is not valid';
   

//     return null;
// }
export const checkCompany=(company)=>{
    const isCompanyValid=/^[a-zA-Z]{3,}$/.test(company);
    if(!isCompanyValid) return 'Company is not valid';
    return null;
}
    


export const checkSignInValidateData=(emailId,password)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailId);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid) return 'Email Id is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    return null;
}