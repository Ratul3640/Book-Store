import toast from 'react-hot-toast';

// get data to local storage

export const getBlogs = () => {
    let blogs = []

    const storedBlogs = localStorage.getItem('read')

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}
export const saveBlog = (SingleBook) => {
    // console.log(SingleBook);
    let allBlogs = getBlogs()

    const isExist = allBlogs.find(b => b.id === SingleBook.id)

    if (isExist) {
        return toast.error('You Have Already Read This Book')
    }
    allBlogs.push(SingleBook)
    localStorage.setItem('read', JSON.stringify(allBlogs))
    toast.success('Books Added to Read List')
}