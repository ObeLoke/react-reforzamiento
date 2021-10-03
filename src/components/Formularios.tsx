import { useForm } from '../hooks/useForm';


export const Formularios = () => {

    const { onChange } = useForm({
        email: '',
        password: ''
    });

    return (
        <>
            <h3>Formulario</h3>

            <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            <input
                type="password"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                onChange={({ target }) => onChange(target.value, 'password')}
            />
        </>
    )
}
