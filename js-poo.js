/* function showFullName() {
    return "Ryan Ray"
}

const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName: showFullName
}

console.log(user.showFullName())  */



//////////////////////////////////////////////

/* const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName: function showFullName() {
        return "Ryan Ray"
    },
    altura: 175
}

console.log(user.showFullName())  */

//////////////////////////////////////////////

/* const user = {
    // PROPIEDADES
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    // MÉTODOS
    showFullName() {
        return "Ryan Ray"
    }
}

console.log(user.showFullName())   */

////////////////////////////////////////////////
// THIS - equivale al objeto de pertenencia

/* const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName() {
        console.log(this)
        return this.name + " " + this.lastname;
    }
}

console.log(user.showFullName())   */

/* const account = {
    number: "123123123123123",
    amount: 100,
    deposit() {
        this.amount += 100
        console.log(this.amount);
    },
    withdraw() {
        this.amount -= 200
        console.log(this.amount);
    }
}

account.deposit()
account.deposit()
account.deposit()
account.deposit()
account.withdraw() */

/* const account = {
    number: "123123123123123",
    amount: 100,
    deposit(quantity) {
        this.amount += quantity;
        console.log(this.amount);
    },
    withdraw(quantity) {
        this.amount -= quantity;
        console.log(this.amount);
    }
}

account.deposit(200);
account.withdraw(100); */

//////////////////////////////////
// FUNCIONES CONSTRUCTORAS A CARA PERRO

/* const user1 = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName() {
        return `${this.name} ${this.lastname}`
    }
}

function Person () {
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function () {
        return `${this.name} ${this.lastname}`
    }
}

const user2 = new Person();
console.log(user2);
user2.name = 'Joe';
user2.lastname = 'Mcmilla';
user2.age = 30;
console.log(user2)
console.log(user2.showFullName()); */

/////////////////
/* // objeto dado por js Object()
const persona1 = new Object()
console.log(persona1) //{}

const persona2 = {}
console.log(persona2) //{}
// entonces, para qué sirve? 
// permite procesar los objetos, usando métodos y propiedades
// ej

const user1 = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName() {
        return `${this.name} ${this.lastname}`
    }
}

console.log(Object.keys(user1)) 
console.log(Object.values(user1)) 
*/

/* function Person(nom, cognom) {
    this.name = nom
    this.lastname = cognom
}

const john = new Person("Pere", "Puchalt")

console.log(john) */

/* function Person(nom, cognom) {
    this.name = nom
    this.lastname = cognom
    this.displayName = function () {
        return `${this.name} ${this.lastname}`
    }
}

// alterando objetos después de su creación
const john = new Person("Pere", "Puchalt")
    // propiedad
john.name = "John";

const mario = new Person("Mario", "Rossi")
const maria = new Person("maria", "perez")
const jose = new Person("jose", "baute") */


       // método asignación en ejecución
/* john.saludar = function () {
    return `Hello I'am ${this.name}`
}  */

/* console.log(john, mario, maria, jose)
    // método para todos, sin usar constructor
    // editando la cadena de prototipos

Person.prototype.saludar = function () {
    return `Hello I'am ${this.name}`
} 

console.log(john, mario, maria, jose)
console.log(mario.saludar()) */

///////////////
// CLASS

/* function Person (nom, cognom) {
    this.name = nom;
    this.lastname = cognom;
}

const person1 = new Person("Pedro", "Piqueras");
console.log(person1);

// es lo mismo que:
// solo es azúcar sintáctico
// solo se diferencian en que las clases se 
// definen primero para usarse
// en una función no es necesario, por su propia naturaleza
// por el hoisting

class Persona {
    constructor (nom, cognom) {
        this.nombre = nom;
        this.apellido = cognom;
    }
}

const persona1 = new Persona("Matías", "Prats");
console.log(persona1); */
/* 
class Persona {

    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }

}

const user = new Persona("Nacho", "Perez");
const user2 = new Persona("Tesco", "Sanz");

console.log(user);
console.log(user2);

// No almacena cada objeto el método, lo toman del prototipo
console.log(user.saludar());
console.log(user2.saludar());

console.log(typeof Persona) //function */

////////////////////////////

// OOP PRINCIPLES - PRINCIPIOS POO
// promote:
    // describe reality using objects and its relationships
        // association, aggregation, composition
    // modularity & code reuse
        //encapsulation, inheritance, polymorphism

/* 
class Person {

    constructor (name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

const john = new Person('john', 'ray');
const maria = new Person('maria', 'perez');

// ASSOCIATION
maria.parent = john
console.log(maria)

console.log(john)

// AGGREGATION - aggregate(padre) and component(hijos)
const company = {
    name: 'fazt tech',
    employees: []
}

company.employees.push(john, maria)

console.log(company) */

// COMPOSITION - person es aggregate y address component

/* const person = {
    name: 'ryan',
    lastname: 'ray',
    address: {
        street: '123 baker street',
        city: 'london',
        country: 'united kingdom'
    }
} */

// ENCAPSULATION

/* const company = {
    name: 'fazt tech',
    employees: [],
    sortEmployees: function () {}
} */
/* console.log(typeof company.sortEmployees)
company.sortEmployees = 'asdasdas';
console.log(typeof company.sortEmployees)
company.sortEmployees(); */

// para prevenir esto,
// podemos crear métodos que nos permiten interactuar con
// las propiedades, para que los usuarios no tengan que acceder
// directamente a ellas, si no a través de estos método
// un intermediario

/* function Company(name) {
    let employees = []
    this.name = name;

    this.getEmployees = function () {
        return employees
    }

    this.addEmployee = function (employee) {
        employees.push(employee)
    }
} */
// no hay acceso a employees
/* const company = new Company('Coca-Cola');
const company2 = new Company('Pepsi');
 */
/* console.log(company)
console.log(company2)
console.log(company.getEmployees()) */

/* company.addEmployee('Ricardo');
company.addEmployee('Manuel');

console.log(company.getEmployees());
console.log(company2.getEmployees()); */


// para acceder a employees, creo un método
// y así estipulo cómo se modifica este

// INHERITANCE - crear objetos más especializados a partir de uno más genérico
// ES5
/* function Person () {
    this.name = ''
    this.lastname = ''
}

function Programmer() {
    this.language = ''
}

Programmer.prototype = new Person()

const programmer = new Programmer()

console.log(programmer) */

/* // ES6
class Person {
                // *
    constructor (name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

class Programmer extends Person {
    constructor(name, lastname, language) {
        // llama al constructor del padre
        // pasar argumentos en orden*
        super(name, lastname);
        this.language = language;
    }
}

const person1 = new Person('maria', 'perez');
console.log(person1)

const programmer1 = new Programmer('paco', 'zia', 'js')
console.log(programmer1)
 */

// POLYMORPHISM
