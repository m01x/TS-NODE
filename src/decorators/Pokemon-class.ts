
function printToConsole( constructor:Function){ //funccion normal para usarse como decorador
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false):Function => { //Arrow function para usarse como decorador (y llama a printToConsole por referencia)
  if( print ){
    return printToConsole;
  }else{
    return () => {}
  }
}

const bloquearPrototipo = function(constructor: Function){
    // Object.seal( constructor);
    // Object.seal( constructor.prototype);
}

//Factory decorator! : Es una funcion que retorna , otra funcion. Se ejecuta en el codigo, al momento de la transpilacion TS -> JS
function CheckValidPokemonId(){
    return function( target: any, propertyKey: string, descriptor:PropertyDescriptor ){
        
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if( id < 1 || id > 800) {
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            } else {
                originalMethod(id);
            }
          
        }
        // descriptor.value = () => console.log('Hola mundo');
    }
}


//Decorador para atributos (propiedades del metodo)
function readonly( isWritable: boolean = true): Function{
    return function( target: any, propertyKey: string){
        const descriptor: PropertyDescriptor ={
            get(){
                console.log(this)
                return 'Fernando'
            },
            set(this, val){
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}



@bloquearPrototipo
@printToConsoleConditional( true )
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'http://pokeapi.co'

    constructor(
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id:number ){
        console.log(`Pokemon guardado en DB ${ id }`);
    }
}