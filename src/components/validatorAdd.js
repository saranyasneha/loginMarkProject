const ValidationAdd=(input)=>{
    let errs={};
if(!input.rollNum){
    errs.rollNum="Roll Number is required"
}
if(!input.name){
    errs.name="Name is required";
}
if(!input.city){
    errs.city="City is required";
}

if(!input.mark1){
    errs.mark1="Mark1 is required";
}
if(!input.mark2){
    errs.mark2="Mark2 is required";
}
if(!input.mark3){
    errs.mark3="Mark3 is required";
}
if(!input.mark4){
    errs.mark4="Mark4 is required";
}
if(!input.mark5){
    errs.mark5="Mark5 is required";
}
    return errs;
}

export default ValidationAdd;