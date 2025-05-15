const form = document.querySelector("#userData");
const userNameInput =document.querySelector("#userNameInput")

form.addEventListener("submit",(e)=>{

    const fullName = userNameInput.value.trim();
    const firstName = fullName.split(" ")[0];

    alert('hello ' + firstName);
    const lastName = fullName.split(" ")[1]?.toLowerCase();
    if(lastName &&lastName.includes("arjmand")){
    alert("party bazi (;")
    }
   
const userInfo ={
    userFullName:
    document.querySelector("#userNameInput").value,

    Email:
    document.querySelector("#emailInput").value,
    Age:
    document.querySelector("#ageInput").value,
    phone:
    document.querySelector("#phonNumber").value,
    fatherName:
    document.querySelector("#fatherName").value,
    Bearthday:
    document.querySelector("#Bearthday").value,
    nationalCode:
    document.querySelector("#nationalCode").value,
    Education:
    document.querySelector("#Education").value,
    Price:
    document.querySelector("#Price").value,
    workExperience:
    document.querySelector("#workExperience").value,
    sex:
    document.querySelector("#sex").value,
    maritalStatus:
    document.querySelector("#marital").value,

}

console.log(userInfo)

e.preventDefault()

})



userNameInput.addEventListener("blur",(e)=>{

    let value = String(e.target.value);
    if(/\d/.test(value)){
        alert("cant use number in this input")
    }
    console.log(e)
    if(e.target.value.length <3 ){
    alert("invalid Name")
    }
})


ageInput.addEventListener("blur",(e)=>{
    console.log(e)
    if (parseInt(e.target.value)<18)
        alert("kocholooooo")
})

Bearthday.addEventListener("blur",(e)=>{
    const birthdate = new Date (e.target.value);
    const cutoffdate= new Date ("2003-01-01")
    if (birthdate>=cutoffdate){
        alert("your age is not appropriate")
        // اگه با سن برابر نبود سوال یادم نره
    }
})


fatherName.addEventListener("blur",(e)=>{
    console.log(e)
    if(e.target.value.length <3 ){
    alert("invalid Name")
    }
})

workExperience.addEventListener("blur",(e)=>{
    console.log(e)
    if(parseInt(e.target.value) <2){
    alert("sorry")
    }
})
