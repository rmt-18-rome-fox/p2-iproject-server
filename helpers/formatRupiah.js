function formatRupiah(data) {
	const price = data.toString()
	let a = ''
	for (let i = price.length -1; i >= 0; i--) {
		a = a + price[i]
		if(i % 3 === 0 && i !== 0) a = a + '.'
	}
	return `Rp. ${a}`
}


module.exports = formatRupiah