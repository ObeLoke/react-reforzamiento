import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)
    const totalPaginasRef = useRef(0)

    useEffect(() => {
        // Llamado al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        setUsuarios(resp.data.data);
        totalPaginasRef.current = resp.data.total_pages;
    }

    const paginaSiguiente = () => {
        if (paginaRef.current < totalPaginasRef.current) {
            paginaRef.current++;
            cargarUsuarios();
        }
    }

    const paginaAnterior = () => {

        if (paginaRef.current > 1) {

            paginaRef.current--;
            cargarUsuarios();
        }
        else {
            alert('No existen menos registros');
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
