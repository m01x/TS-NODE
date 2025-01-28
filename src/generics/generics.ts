export const printObject = ( argument: any ) => {
    console.log( argument );
}

//Esta funcion es generica 💡, por estandar la letra utilizada es T , porque? nuse...

export function genericFunction<T>( argument: T){
   return argument;
}


export const genericFunctionArrow = <T>( argument: T) => argument;