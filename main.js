const tagsElement = document.getElementById('tags');
const textareaElement = document.getElementById('textarea');


textareaElement.focus();


textareaElement.addEventListener('keyup', (e) =>{
    createTags(e.target.value)
})

function createTags(input){
    const tags = input.split(' ').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsElement.innerText = '';


    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag');
        tagEl.innerText = tag
        tagsElement.appendChild(tagEl)
    })

}