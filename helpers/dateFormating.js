function dateFormating(date) {
    const day = (date.getDay())
    const month = (date.getMonth())
    const year = (date.getFullYear())
    return `${day}-${month}-${year}`
}

module.exports = dateFormating  