const { faker } = require('@faker-js/faker');
const express = require("express"); //importando express 

const app = express(); //inicializando 

/* Con funciones:
const objetoUsuario = () => ({
    _id : faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const objetoEmpresa = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.company.companyName(),
    direccion: { 
        calle: faker.address.streetAddress(),
        ciudad: faker.address.city(),
        estado: faker.address.state(),
        cp: faker.address.zipCode(),
        pais: faker.address.country()
    }
});
*/

//Otra forma con clases
class Usuario {
        constructor() {
        this._id = faker.datatype.uuid(),
        this.firstName = faker.name.firstName(),
        this.apellido = faker.name.lastName(),
        this.telefono = faker.phone.phoneNumber(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

class Empresa{
        constructor(){
            this._id = faker.datatype.uuid(),
            this.nombre = faker.company.companyName(),
            this.direccion = { 
                calle : faker.address.streetAddress(),
                ciudad : faker.address.city(),
                estado : faker.address.state(),
                cp : faker.address.zipCode(),
                pais : faker.address.country()
            }
        }

}


app.get("/api/users/new",(req,res)=>{
    //const nuevoUsuario = objetoUsuario();
    const nuevoUsuario2 = new Usuario();
    res.json(nuevoUsuario2);
});

app.get("/api/companies/new",(req,res) => {
    //const nuevaEmpresa = objetoEmpresa();
    const nuevaEmpresa2 = new Empresa();
    res.json(nuevaEmpresa2); //solo se puede enviar una respuesta
});

app.get("/api/user/company",(req,res)=>{
    /*
    const nuevoUsuario = objetoUsuario(); // const nuevoUsuario2 = new Usuario()
    const nuevaEmpresa = objetoEmpresa(); // const nuevaEmpresa2 = new Empresa()
    */
    const nuevoUsuario2 = new Usuario()
    const nuevaEmpresa2 = new Empresa()
    res.json({nuevoUsuario2,nuevaEmpresa2}); //se envia un objeto entre {}, res.json({nuevoUsuario,nuevaEmpresa})
})


app.listen(8000,() => 
    console.log("servidor corriendo")
);


