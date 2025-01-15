import { ref } from "vue";

const url = 'https://jsonplaceholder.typicode.com/posts'
export default function fetchApi(){
    // Array que guarda els posts
    const postsArray = ref([]);

    // Funció que fa la petició a l'API
    const llegirTots = async () => {
        const reponse = await fetch(url);
        postsArray.value = await reponse.json();
    }

    const llegirPost = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                throw new Error(`Error al obtener el post con id ${id}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    

    return { postsArray, llegirTots, llegirPost }
}