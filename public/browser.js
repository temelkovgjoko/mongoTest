document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter new text")
        axios.post('/update-item', { text: userInput, id: e.target.getAttribute("data-id") })
            .then(function () {
                // do something interestin here in the next video
            })
            .catch(function () {
                console.log('please try again later')
            })
    }
})

