
export const TiposBasicos = () => {

    const nombre: string = 'Miguel Veloso';
    const edad: number = 25;
    const estaActivo: boolean = true;

    const poderes: string[] = ['Volar', 'Velocidad Extrema', 'Respirar bajo el agua'];

    poderes.push('Salto alto');

    return (
        <>
            <h3>
                Tipos Básicos
            </h3>
            Mi nombre es: {nombre} <br />
            Mi edad es: {edad} <br />
            Está activo? {(estaActivo) ? 'si' : 'no activo'} <br />
            Los poderes que tengo son: {poderes.join(', ')}
        </>
    )
}
