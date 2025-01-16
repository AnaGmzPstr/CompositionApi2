import { ref } from "vue";

const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
export default function fetchApi() {
    // Array que guarda els posts
    const postsArray = ref([]);

    // Funció que fa la petició a l'API
    const llegirTots = async () => {
        const reponse = await fetch(urlPosts);
        postsArray.value = await reponse.json();
    }
    // Funció que fa la petició a l'API per un post específic
    const llegirPost = async (id) => {
        try {
            const response = await fetch(`${urlPosts}/${id}`);
            if (!response.ok) {
                throw new Error(`Error al obtener el post con id ${id}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    // Funció que fa la petició a l'API per un usuari específic
    const llegirUsuari = async (id) => {
        try {
            const response = await fetch(`${urlUsers}/${id}`);
            if (!response.ok) {
                throw new Error(`Error al obtener el usuari con id ${id}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    // Retornem la información obtinguda
    return { postsArray, llegirTots, llegirPost, llegirUsuari }
}
