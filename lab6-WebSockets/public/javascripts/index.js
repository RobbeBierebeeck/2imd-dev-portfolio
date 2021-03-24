const submit = document.querySelector(".submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const dropdown = document.querySelector("#teams");
    const score = document.querySelector("#score");
    console.log(score.value);
    console.log(dropdown.value);
   
})