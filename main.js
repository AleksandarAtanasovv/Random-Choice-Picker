const tagsElement = document.getElementById('tags');
const textareaElement = document.getElementById('textarea');
const choiceDisplay = document.getElementById('picked');

textareaElement.focus();


textareaElement.addEventListener('keyup', (e) =>{
    createTags(e.target.value)

    if(e.key === 'Enter' ){
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomPick();
    }
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
function randomPick(){
   const times = 30;

   const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        

        highlightTag(randomTag);
        if(tagsElement.classList === "highlight"){
            const text = tagsElement.innerHTML;
            console.log(text);
        }

        setTimeout(() => {
            unHighlightTag(randomTag);
            choiceDisplay.innerText = randomTag.innerText
        }, 100);
   }, 100);



   setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();


            highlightTag(randomTag)
        }, 100);
   }, times * 100);

}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag){
    tag.classList.add('highlight');
}
function unHighlightTag(tag){
    tag.classList.remove('highlight');
} 


