//AJAX 101 notes:

// write click listener for 'Generate Doggo' button
// .addEventListener

// Make clickListener change the text to "Generating Doggo...."

// following code needs to go inside the click listener for request:
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(function(response) { return response.json(); })
//     .then(function(data) {
//     // your code
//     });

//AJAX 102 notes:

// Done - 1)Add empty dropdown menu using <select>
// Done? - 2a)Use fetch to make request to https://dog.ceo/api/breeds/list when page first loads
// Done? - 2b)confirm request shows in network tab on every reload
// Done - 3a) In the callback function of the .then(function(data){}),
//    loop through the array of dog breeds that are in the "data" parameter
// Done - 3b) For each dog breed, create a new "option" element (<option value="pitbull">Pit Bull</option>)
//     and then append it to the <select> tag you created earlier.
// Done - 3c) Drop down list should contain a list of dog breeds.

const doggoButton = document.querySelector("#generateButton");
doggoButton.addEventListener("click", function () {
    doggoButton.textContent = "Generating New Doggo..."
    const dogContainer = document.getElementById('dogs');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        let img = document.getElementById("img");
        if(!img){
            img = document.createElement('img');
            img.setAttribute("id", "img")
            dogContainer.appendChild(img);
        }
        img.setAttribute("src", data.message);
        doggoButton.textContent = "Generate Doggo!";
    });
});
let select = document.getElementById("breeds");
select.addEventListener("change", function() {
    console.log("click");

    fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);
        let img = document.getElementById("img");
        if(!img){
            img = document.createElement('img');
            img.setAttribute("id", "img")
            dogContainer.appendChild(img);
        }
        img.setAttribute("src", data.message);
        doggoButton.textContent = "Generate Doggo!";
    });
});

    fetch('https://dog.ceo/api/breeds/list')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.message);

        for (let i = 0; i < data.message.length; i++) {
            let option = document.createElement("option");
            option.innerText = data.message[i];
            select.appendChild(option);
        }        
    });