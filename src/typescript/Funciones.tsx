export const Funciones = () => {

    const sumar = (a: number, b: number): number => {
        const total = a + b;

        return total;
    }

    return (
        <>
            <h3>Funciones</h3>

            <span>El resultado es: {sumar(123, 123)}</span>
        </>
    )
}
