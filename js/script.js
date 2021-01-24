const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

const cat ={
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();

//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");
for(let i =0; i <paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


//Question 7

function catNames(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

catNames(cats);

//Question 8

function createCats(catsList) {
    let html = "";

    for(let i = 0; i < catsList.length; i++) {
        
        let ageCat = "Age unknown";

        if(catsList[i].age) {
            ageCat = catsList[i].age;
        }

        html += `<div class="cat">
                    <h5>${catsList[i].name}</h5>
                    <p>Age:${ageCat}</p>
                </div>`;
    }

    return html;

}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;

