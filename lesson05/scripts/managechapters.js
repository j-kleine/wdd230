const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value != '') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const deleteButton = document.createElement('button');

        a.textContent = input.value;
        a.href = "https://www.churchofjesuschrist.org/study/scriptures/bofm/";
        a.target = "_blank";
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = `Remove ${input.value}`;
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