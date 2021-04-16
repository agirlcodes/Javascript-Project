const dataRequest = async () => {
	let { data } = await axios.get(
		"https://recipe-puppy.p.rapidapi.com/?rapidapi-key=a34bca3722msh04cfce5a92891bep18f62bjsn79fde32debcf"
	);
	return data;
};
document.addEventListener("DOMContentLoaded", async () => {
	const dataValue = await dataRequest();
	for (const value of dataValue.results) {
		const mainData = document.querySelector("#display");
		mainData.innerHTML += `
	      <figure>
	          <img class="ImgThumbnail" src="${value.thumbnail}" alt="${value.title}">
	          <figcaption>${value.title}</figcaption>
	      </figure>
	  `;
	}

//Search Bar
const searchButton = document.querySelector('#search-button');
	function searchBar() {
		introducedTitle = document.querySelector('#search').value;

			const searchData = dataValue.results;
			searchData.forEach(item => {
				if (item.title.toLowerCase().includes(introducedTitle.toLowerCase())) {
					const printSearchedData = document.querySelector('#results');
					printSearchedData.innerHTML = `
					<div id="layout">
					<h3> ${item.title} </h3>
					<img src="${item.thumbnail}">
						<div class="dataResults">
						<p> <b> Ingredients: </b> ${item.ingredients}. </p>
						<a href="${item.href}">Get Recipe</a>
						</div>
					</div>
					`;
					} 
				})
			}
					searchButton.addEventListener('click', function(event) {
						event.preventDefault();
						searchBar();
					})

	document.querySelector("#display").addEventListener("click", function (e) {
		getFigcaption = e.target.parentElement.innerText;
		const findAside = document.querySelector("aside");
		findAside.style.display = "block";

		for (const value of dataValue.results) {
			if (value.title === getFigcaption) {
				console.log(value);
				const card = document.querySelector("#modal");
				console.log(card);
				card.innerHTML = `
				<div class="modalHeader">
					 <h2>${value.title}</h2>
					 <button>x</button>
				  </div>
						<h4>Ingredients:</h4>
						<p>${value.ingredients}</p>
						<a href="${value.href}">Get Recipe</a> 
					 `;
			}
		}
	});
});
document.querySelector("aside").addEventListener("click", function (x) {
	const aside = x.path[3];
	if (aside.style.display === "block") {
		aside.style.display = "none";
	}
});
