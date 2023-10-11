const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value != '') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const deleteButton = document.createElement('button');

        const inputArray = input.value.split(' ');
        
        if (inputArray[0] == '1-Nephi') {
            inputArray[0] = '1-ne';
        } else if (inputArray[0] == '2-Nephi') {
            inputArray[0] = '2-ne';
        } else if (inputArray[0] == '3-Nephi') {
            inputArray[0] = '3-ne';
        } else if (inputArray[0] == '4-Nephi') {
            inputArray[0] = '4-ne';
        } else if (inputArray[0] == 'Words-of-Mormon') {
            inputArray[0] = 'w-of-m';
        } else if (inputArray[0] == 'Helaman') {
            inputArray[0] = 'hel';
        } else if (inputArray[0] == 'Mormon') {
            inputArray[0] = 'morm';
        } else if (inputArray[0] == 'Moroni') {
            inputArray[0] = 'moro';
        }

        // console.log(inputArray[0]);

        let linkBook = inputArray[0]
        let linkChapter = inputArray[1]

        // console.log(linkBook);
        // console.log(linkChapter);

        let cleanBookArray = input.value.split('-');

        let cleanBook = cleanBookArray.join(' ');

        a.textContent = cleanBook;

        if (inputArray[1] == undefined) {
            inputArray[1] = '';

            a.href = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${linkBook}/1`;
        } else {
            a.href = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${linkBook}/${linkChapter}/`;
 
        }

        a.target = '_blank';
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = `Remove ${cleanBook}`;
        li.append(a);
        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        })
        
        input.focus();
        input.value = '';
    }
})

// --- !!! --- Working Core Reqs --- !!! ---
// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');

// button.addEventListener('click', function() {
//     if (input.value != '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         deleteButton.ariaLabel = `Remove ${input.value}`;
//         li.append(deleteButton);

//         list.append(li);

//         deleteButton.addEventListener('click', function() {
//             list.removeChild(li);
//             input.focus();
//         })
        
//         input.focus();
//         input.value = '';
//     }
// })