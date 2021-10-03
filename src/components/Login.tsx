import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginActionPayload = {
    username: string,
    nombre: string
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload };


const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const { username, nombre } = action.payload;
            return {
                validando: false,
                token: 'ASD!"·rewR',
                username,
                nombre
            }
        default:
            return state;
    }
}


export const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Miguel',
                username: 'ObeLoke'
            }
        });
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>

            {
                (token)
                    ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                (token)
                    ? (

                        <button
                            className="btn btn-danger"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    )
                    : (
                        <button
                            className="btn btn-primary"
                            onClick={login}
                        >
                            Login
                        </button>
                    )
            }
        </>
    )
}
