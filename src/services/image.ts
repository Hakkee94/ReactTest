const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getImages() {
    const response = await fetch(`${VITE_API_URL}/image`)
        .then(res => res.json())
    return response
}

export async function getImage(id) {
    const response = await fetch(`${VITE_API_URL}/image?id=${id}`)
        .then(res => res.json())
    return response
}