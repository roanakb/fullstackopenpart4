const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => { return blogs.reduce((sum, item) => {return sum + item.likes}, 0) }

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return {}
    }
    else {
        return blogs.reduce((fav, item) => {
            if (item.likes >= fav.likes) {
                return item
            }
            else {
                return fav
            }
        }, { likes: 0 })
    }
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return {}
    }
    const authors = [
        {
            author: blogs[0].author,
            blogs: 1
        }
    ]
    for (let i = 1; i < blogs.length; i++) {
        const findAuthor = authors.findIndex((current) => {
            return current.author === blogs[i].author
        })
        if (findAuthor !== -1) {
            authors[findAuthor].blogs++
        }
        else {
            authors.push({
                author: blogs[i].author,
                blogs: 1
            })
        }
    }
    authors.sort((a, b) => { return a.blogs - b.blogs })
    return authors[authors.length - 1]
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return {}
    }
    const authors = [
        {
            author: blogs[0].author,
            likes: blogs[0].likes
        }
    ]
    for (let i = 1; i < blogs.length; i++) {
        const findAuthor = authors.findIndex((current) => {
            return current.author === blogs[i].author
        })
        if (findAuthor !== -1) {
            authors[findAuthor].likes += blogs[i].likes
        }
        else {
            authors.push({
                author: blogs[i].author,
                likes: blogs[i].likes
            })
        }
    }
    authors.sort((a, b) => { return a.likes - b.likes })
    return authors[authors.length - 1]
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
}