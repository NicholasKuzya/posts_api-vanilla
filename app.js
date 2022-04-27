const addPostsBtn = document.querySelector('.add__posts-btn')
addPostsBtn.addEventListener('click', addPosts)


async function addPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts/'
	const response = await fetch(url)
	const data = await response.json()
	const containerElement = document.querySelector('.container')
	let i = 0

	for (cardID in data) {
		if (cardID <= data[i]) {
			const cardCreate = document.createElement('div')
			cardCreate.className = 'card'
			cardCreate.innerHTML = `
				<div class="card__title">
					${data[cardID].title}
				</div>
				<div class="card__body">
					${data[cardID].body}
				</div>`
			containerElement.insertAdjacentElement('beforeend', cardCreate)
		}
	}
}