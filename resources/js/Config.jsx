import axios from 'axios'

const base_api_url = 'http://localhost:8000/api/v1'
const csrfToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('XSRF-TOKEN=')).split('=')[1];

export default {
    
    // Después de que el usuario inicie sesión exitosamente, Laravel emitirá una cookie de sesión llamada laravel_session. Esta cookie se enviará automáticamente con todas las solicitudes posteriores. Así que, por ejemplo, cuando un usuario esté autenticado, cualquier solicitud subsiguiente a tus rutas de la API (como /api/v1/some-protected-route) se autenticaría automáticamente utilizando esta cookie de sesión sin necesidad de pasar un token explícito.
    // Configurar la Protección CSRF para Subsecuentes Solicitudes Cuando haces una solicitud después del login (como la llamada a una API protegida), Axios manejará automáticamente el encabezado X-XSRF-TOKEN por ti. Este encabezado se utiliza para validar la protección CSRF y debería coincidir con la cookie XSRF-TOKEN establecida por Laravel.
    // Si no estás utilizando Axios o si no deseas que Axios maneje esto por ti, puedes establecer el encabezado manualmente:
    // const token = document.cookie.match(/XSRF-TOKEN=(\S+)/)?.[1];
    // axios.defaults.headers.common['X-XSRF-TOKEN'] = token;
    // Sin embargo, Axios lo hace automáticamente si se configura correctamente.
    //AUTH

    GetRegister: (data) => axios.post(`${base_api_url}/auth/register`, data),
    GetLogin: (data) => axios.post(`${base_api_url}/auth/login`, data, 
        {
            withCredentials: true
        }
    ),
    GetLogout: () => axios.post(`${base_api_url}/auth/logout`, {},
        { 
            // headers: { 
            //     'X-XSRF-TOKEN': '52|mbt8DPV2uCluQe1uaXWb5aRAjnBILiH9EbXXVamb13dbd3bd',
            //     'laravel_session': "eyJpdiI6IjExMEFTSVNYOEZVS0NnN0prd0VzY1E9PSIsInZhbHVlIjoieGh4T1lPVHhseHZ4MTUrWHpXbUVHUzN2RWZxSkJzZ0UyTzJKYU8rNjMzazBSSlRabGU4RGJWaFlzdkwxeDc3UHNUazc3MnFwWDV0cDQ0eFFyQit2cStVUVppejBpeHNOenV3RTRGWU9JOWliVFJhaGxySXBVRHNCbFpFZHRDUW0iLCJtYWMiOiIxN2Y5OWE3MzA3ODhmNjgzMDliODcxN2E4ZjExOGEyZGI0NWJhNGZmOGEwYzU1NTQwNWQyYjkyMWFiYjUxZjdiIiwidGFnIjoiIn0%3D"
            // },
            withCredentials: true
        },
    )

}