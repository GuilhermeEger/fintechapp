function showBilling(){

    const billinList = [
        {
            icon: "bi bi-cart-dash",
            label: "Compras",
            id: "purchase"
        },
        {
            icon: "bi bi-credit-card",
            label: "Cartões",
            id: "card"
        },
        {
            icon: "bi bi-person",
            label: "Usuários",
            id: "user"
        }
    ]
    
    var loopdiv = document.getElementById('billingsContainer');
    const showInHtml = billinList.map(( project ) => {

        return `
            <div class="billingItem">
                <div onclick="changeScreen('${project.id}')" class="buyContent">
                    <div>
                        <i style="font-size: 23px" class="${project.icon}"></i>
                    </div>
                    <div>
                        ${project.label}
                    </div>
                </div>
                <div class="buyContentIcon">
                    <i style="display: flex" class="bi bi-arrow-right-short"></i>
                </div>
            </div>`
    
    })
    
    loopdiv.innerHTML = showInHtml;

}

function checkLogged(){

    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');
    console.log(user,password);

    if(user == 1 && password == 3){
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
        window.location.href="home.html";
    }

}

function logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    window.location.href="login.html";
}

function verifyLogin(e){

const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    }

    form.classList.add('was-validated')
}, false)
})

var user = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(!user || !password){
    return
} else {

    fakeLoading(() => {
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
        window.location.href="home.html";
    });
    
}

}

function handleGreetings(){

    var horas = new Date().getHours();
    var saudacao = "";

    if (horas >= 18)
        saudacao = "Boa noite!"
    else if (horas <= 12) {
        saudacao = "Bom dia!"
    } else {
        saudacao = "Boa tarde!"
    }

    document.getElementById("greeting").innerHTML = saudacao;

}

function handleName() {

    const user = localStorage.getItem('user');
    document.getElementById("userName").innerHTML = "Olá " + user + ",";

}

function fakeLoading(cb){

    document.getElementById("loadind").classList.add('spinner-border');

    setTimeout(() =>{
        document.getElementById("loadind").classList.remove('spinner-border');
        cb();
    }, 1500)
    

}

function backHome(){
    window.location.href="home.html";
}

function changeScreen(pageId){

    if (pageId == 'purchase'){
        window.location.href="../pages/purchases.html";
    } else if (pageId == 'card'){
        window.location.href="../pages/creditCards.html";
    } else {
        window.location.href="../pages/users.html";
    }

}
