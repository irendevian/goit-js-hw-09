const formData = {
    email: "",
    message: ""
}

const storageKey = "feedback-form-state";


const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");


form.addEventListener("input", setFormData);
form.addEventListener("submit", handleSubmit);

// ------------------------

function setFormData(event) {
    
     if (event.target === input) {
        formData.email = event.target.value;
    } else if (event.target === textarea) {
        formData.message = event.target.value;
    }

    localStorage.setItem(storageKey, JSON.stringify(formData));
}


function getFormData() {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
        const userData = JSON.parse(saved);

        if (userData.email) {
            input.value = userData.email;
        }
        
        if (userData.message) {
            textarea.value = userData.message;
        }

        formData.email = userData.email || "";
        formData.message = userData.message || "";

    }

}

getFormData();

// --------------

function handleSubmit(event) {
    event.preventDefault();

    if (textarea.value === "" || input.value === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
    formData.email = "";
    formData.message = "";

};

