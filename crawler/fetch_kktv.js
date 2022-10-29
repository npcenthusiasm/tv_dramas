<div class="cover-view__desc">
  <div class="desc-title">全民星攻略</div><span class="desc-episode">更新至第722集</span>
  <div class="desc-rating icon rating">4.3</div>
</div>

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

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc, {
      mode : 'no-cors',
  })
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = 'image file name here'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
