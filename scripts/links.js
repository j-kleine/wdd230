const baseURL = "https://j-kleine.github.io/wdd230/";
const linksURL = "https://j-kleine.github.io/wdd230/data/links.json";

const linksList = document.querySelector('#linksList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    
    console.log(data.lessons);

    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach((element) => {
        let listItem = document.createElement('li');

        element.links.forEach((activity, index) => {
            let link = document.createElement('a');
            link.textContent = activity.title;
            link.setAttribute('href', activity.url);
            link.setAttribute('target', '_blank');
            listItem.appendChild(link);

            if (index < element.links.length - 1) {
                let separator = document.createElement('span');
                separator.textContent = ' | ';
                listItem.appendChild(separator);
            }
            
            linksList.appendChild(listItem);
        })
    });
}

getLinks();