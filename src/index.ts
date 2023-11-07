let mensaje: string = "Hola Mundo"
mensaje = "chanchito feliz"
mensaje = "chao Mundo"
console.log(mensaje)
console.log(typeof [])

//---------------------------------

let extincionDinosaurios: Number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos: boolean = true

function chanchitoFeliz(config:any){
    return config
}

let animales = ['chanchito','feliz','felipe']
let nums: number[] = [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = []

//animales.map(x => x.) //el autocompletado sugiere métodos del tipo de dato

//---------------------------------

let tupla:[number, string[]] = [1, ['chanchito feliz','chanchito felipe']]

//--------------------------------- Enums

enum Talla {
    Chica= 's',
    Mediana= 'm',
    Grande= 'l',
    ExtraGrande= 'xl'
}

const variable1 = Talla.Grande
console.log(variable1)

const enum loadingState {
    Idle,
    Loading,
    Success,
    Error
}

const estado = loadingState.Success

//--------------------------------- Objetos
type Direccion = {
    numero: number,
    calle : String,
    pais: String
}
type Persona = {
    readonly id:number, 
    nombre: String,
    talla: Talla,
    direccion: Direccion
}
const objeto: Persona  = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Soempre Viva',
        pais: 'Chanclholandia'
    }
}

const arr: Persona[] = []