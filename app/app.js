const form = document.querySelector("#userData");
const userNameInput =document.querySelector("#userNameInput")

form.addEventListener("submit",(e)=>{
   
const userInfo ={
    userName:
    document.querySelector("#userNameInput").value,
    lastName:
    document.querySelector("#lastNameInput").value,
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
    console.log(e)
    if(e.target.value.length <3 ){
    alert("invalid")
    }
})

lastNameInput.addEventListener("blur",(e)=>{
    console.log(e)
    if(e.target.value.length <3 ){
    alert("invalid lastname")
    }
})

fatherName.addEventListener("blur",(e)=>{
    console.log(e)
    if(e.target.value.length <3 ){
    alert("invalid lastname")
    }
})

ageInput.addEventListener("blur",(e)=>{
    console.log(e)
    if(parseInt(e.target.value) <20){
    alert("too young")
    }
})


workExperience.addEventListener("blur",(e)=>{
    console.log(e)
    if(parseInt(e.target.value) <2){
    alert("sorry")
    }
})
