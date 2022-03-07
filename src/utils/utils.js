export const sortArray = (arr, key) => {
    if (arr.length > 0) return arr.sort((a,b)=>(a[key]>b[key]) ? -1 : 1)
}