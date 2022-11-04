//--------------------------------------------------------------------->
// API - JSON placeholder
import { getUsers } from "./conexion.js"
import css  from './app.css';
import miImagen from "./texturablanca.png"

const divTitle = document.createElement("div");
const h1Title = document.createElement("h1");
h1Title.innerText = "Usuarios Registrados";
h1Title.style = "margin-top: 15px";
h1Title.style = "text-align: center";
divTitle.appendChild(h1Title);
document.getElementById("title").appendChild(divTitle);

const createUser = async (user) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.classList.add("mb-3");
        // divCard.style = "max-width: 540px";
        
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        divRow.classList.add("g-0");
        divCard.appendChild(divRow);
        
        const divCol= document.createElement("div");
        divCol.classList.add("col-md-4");
        divCol.style = "display: flex";
        divRow.appendChild(divCol);

        const imgFoto = document.createElement("img");
        imgFoto.classList.add("img-fluid");
        imgFoto.classList.add("rounded-start");
        imgFoto.src = "https://www.fgjcdmx.gob.mx/themes/base/assets/images/def-user.png";
        divCol.appendChild(imgFoto);

        const divColbody = document.createElement("div");
        divColbody.classList.add("col-md-8");
        divRow.appendChild(divColbody);

        const divCardbody = document.createElement("div");
        divCardbody.classList.add("card-body");
        divCardbody.style.backgroundImage = `url(${miImagen})`
        divColbody.appendChild(divCardbody);

        const name = document.createElement("h5");
        name.classList.add("card-title");
        name.innerText = user.name;
        divCardbody.append(name);
        
        const usrname = document.createElement("h6");
        usrname.classList.add("card-subtitle");
        usrname.classList.add("text-muted");
        usrname.classList.add("mb-3");
        usrname.innerText = user.username;
        divCardbody.append(usrname);

        const labelEmail = document.createElement("label");
        labelEmail.classList.add("fw-bold");
        labelEmail.innerText = "Correo : ";
        divCardbody.append(labelEmail);

        const usremail = document.createElement("p");
        usremail.classList.add("card-text");
        usremail.innerText = user.email;
        divCardbody.append(usremail);

        const labelPhone = document.createElement("label");
        labelPhone.classList.add("fw-bold");
        labelPhone.innerText = "Teléfono : ";
        divCardbody.append(labelPhone);

        const usrphone = document.createElement("p");
        usrphone.classList.add("card-text");
        usrphone.innerText = user.phone;
        divCardbody.append(usrphone);

        const labelweb = document.createElement("label");
        labelweb.classList.add("fw-bold");
        labelweb.innerText = "Sitio Web : ";
        divCardbody.append(labelweb);

        const usrwebsite = document.createElement("p");
        usrwebsite.classList.add("card-text");
        usrwebsite.innerText = user.website;
        divCardbody.append(usrwebsite);

        const labeladdress = document.createElement("label");
        labeladdress.classList.add("fw-bold");
        labeladdress.innerText = "Dirección : ";
        divCardbody.append(labeladdress);

        const usraddress = document.createElement("p");
        usraddress.classList.add("card-text");
        usraddress.innerText = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}` ;//string template
        divCardbody.append(usraddress);

        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = "Compañia..";
        btn.id = `${user.id}`;
        btn.style = "background-color: #BC955C";
        divCardbody.append(btn);

        let p = document.createElement("p");
        p.classList.add("card-text");
        p.style = 'display:none';
        p.id = `parrafo${user.id}`;
        p.innerText=`${user.company.name}`;
        divCardbody.append(p);
        
        btn.addEventListener("click",function(){
          let p = document.getElementById(`parrafo${this.id}`);
          if(p.style.display == 'none'){ p.style = 'display:block'; }
          else{ p.style = 'display:none';   }
        })
            
        document.getElementById("app").appendChild(divCard);
}

   
  const mountUsers = async () => {
        try {
          const users = await getUsers();
          users.forEach(user => {
            createUser(user);
          });
    
        } catch (error) {
          throw new Error("Algo salio mal")
        }
  }
   
  mountUsers();