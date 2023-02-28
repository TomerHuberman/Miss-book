
const URL_KEY = 'https://www.googleapis.com/books/v1/volumes?q=search+'

export const googleBookService = {
    query,
}

function query(txt) {
    return axios.get(URL_KEY + txt)
    .then(res => res.data)
    .then(books => books.items)
}