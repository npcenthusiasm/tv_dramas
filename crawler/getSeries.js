
// https://kktv.me/titles/06001294
function getEpisodes () {
	const episodeList = Array.from(document.querySelectorAll('.auto-size-list .auto-size-list__item'))

	let items = []

	function getEpisodesData () {

		items = episodeList.map(node => {
			const imgNode = node.querySelector('img')
			const titleNode = node.querySelector('.episode-item__title .title')
			const subTitleNode = node.querySelector('.episode-item__title .sub-title')

			return {
				img: imgNode.src,
				title: titleNode.innerText,
				time: subTitleNode.innerText,
			}
		})

		return items
	}

	function getImgsUrl () {

		if (items.length === 0) {
			getEpisodesData()
		}
		return items.map(it => {
			return img.split('/')[it.img.split('/').length - 1]
			// return it.img.split('/')[it.img.split('/').length - 1]
		})
	}

	return {
		getEpisodesData,
		getImgsUrl
	}
}

// home
function getDramaList() {
	var nodes = Array.from(document.querySelectorAll('.sc-cc5a8335-1 .lovo-list .block-list__item'))

	var infos = nodes.map(node => {
		const img =  node.querySelector('.cover-view__img img')?.src || ''
		const title = node.querySelector('.desc-title')?.innerText || ''
		const episode = node.querySelector('.desc-episode')?.innerText || ''
		const rating = node.querySelector('.desc-rating')?.innerText || ''
		return {
			img,
			title,
			episode,
			rating
		}
	})

}


