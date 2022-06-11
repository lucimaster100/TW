let username="ana";
let validUsername=0;
const fetchUserCredentials=async (username) =>{
    
    try {
        let UserData = await fetch(`/usersByName/${username}`)
        let UserDataJson = await UserData.json()

        return UserDataJson
    }catch (err){
        console.log(err)
    }
}
const getUserData=async(username)=>{

    try {
        let jsonData = await fetchUserCredentials(username)
        console.log(jsonData[0].username)
        console.log(jsonData[0].password)
        
    }catch (err){
        
    }
   
}

class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateSubmit();
    }
    
    validateSubmit() {
        
        let self = this;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            var error = 0;
            var count=0;
  
            console.log(validUsername)
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (count==0){
                   
                    username=input.value;
                    getUserData(username);
                }
                count++;
                if (self.validateFields(input) == false) {
                    error++;
                }
               
            })
            if (error == 0) {
              
                localStorage.setItem("auth",1)
                this.form.submit();
            }
        })
    }
    validateFields(field) {
        console.log(validUsername);
        getUserData(username);
        console.log(validUsername);
        if (field.value.trim() == "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank `,
                "error"
            );

            return false;
        } else {
            if (field.type == "password") {
                
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 characters long `,
                        "error"
                    );
                    return false;
                }else{
                    this.setStatus(field,null,"success");
                    return true;
                }
            }else{
                this.setStatus(field,null,"success");
                return true;
            }
        }
    }
    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");
        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");

        }
        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error")
        }
    }
}

const form = document.querySelector(".loginForm");
if (form) {
    const fields = ['username', 'password'];
    const validator = new Login(form, fields);
}
