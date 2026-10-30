<<<<<<< HEAD
class Casa {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;

        console.log(`Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
    }

    // Métodos para actualizar los datos (Setters)
    setNumero(numero) {
        this.numero = numero;
    }

    setCalle(calle) {
        this.calle = calle;
    }

    setCodigoPostal(codigo) {
        this.codigoPostal = codigo;
    }


    imprimeCalle() {
        return this.calle;
    }

    imprimeNumero() {
        return this.numero;
    }

    imprimeCodigoPostal() {
        return this.codigoPostal;
    }
=======
class Casa {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;

        console.log(`Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
    }

    // Métodos para actualizar los datos (Setters)
    setNumero(numero) {
        this.numero = numero;
    }

    setCalle(calle) {
        this.calle = calle;
    }

    setCodigoPostal(codigo) {
        this.codigoPostal = codigo;
    }


    imprimeCalle() {
        return this.calle;
    }

    imprimeNumero() {
        return this.numero;
    }

    imprimeCodigoPostal() {
        return this.codigoPostal;
    }
>>>>>>> 521707ef9f67f7e1a5193d05e187edd624f88c4e
}