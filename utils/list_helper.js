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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
}