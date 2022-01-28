const express = require("express");
// const res = require("express/lib/response");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker')


class User {
    constructor(firstName, lastName, phoneNumber, email, password){
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password()
    }
}
//console.log(new User())
class Company{
    constructor(name,address){
        let street = faker.address.streetName()
        let city = faker.address.city()
        let state = faker.address.state()
        let zipCode = faker.address.zipCode()
        let country = faker.address.country()
        this.name = faker.company.companyName();
        this.address = [street, city, state, zipCode, country]
    }
}
console.log(new Company())

app.listen( port, () => console.log("connected"))


app.get('/api/users/new', (req, res) => {
    let newUser = new User()
    console.log(res)
        res.json({result:newUser})
})

app.get('/api/company/new', (req, res) => {
    let newCompany = new Company()
        res.json({result:newCompany})
})

app.get('/api/users/company',(req, res) => {
    let newCompany = new Company()
    let newUser = new User()
    res.json({company:newCompany, user:newUser})
})