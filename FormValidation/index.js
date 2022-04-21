let form = document.querySelector("#form");
let accountsName = document.querySelector("#name");
let password = document.querySelector("#password");
let eMail = document.querySelector("#email");
let accounts = [];

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let messages = [];
    
  if (accountsName.value === "" || accountsName.value == "null" ||accountsName.value.length < 5) {
        messages.push("Error");
        accountsName.value = "Enter your name";
        accountsName.addEventListener("click", () => {
        accountsName.value = "";
    });
  }

  if ( password.value === "" || password.value == "null" || password.value.length < 8 ) {
        messages.push("Error");
        password.type = "text";
        password.value = "Enter password longer then 8 characters";
        password.addEventListener("click", () => {
        password.value = "";
    });
  }

       if (messages.length == 0) {
            saveAccount();
        }
});

function saveAccount() {
  let newAccount = {
    name: accountsName.value,
    password: password.value,
  };
  accounts.push(newAccount);
    console.log(accounts);
    accountsName.value = "";
    password.value = "";
}
