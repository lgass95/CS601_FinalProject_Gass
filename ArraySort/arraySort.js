document.addEventListener("DOMContentLoaded", function(){
    const list = document.createElement("ul");
    let item1 = document.createElement("li");
    document.getElementById("list_container").appendChild(list);
    let content = document.createTextNode("My List");
    list.appendChild(content);
});
{
    let words = [];

    while(true){
        let input = prompt ("Add a word (enter \"q\" to finish");
        if (input === "q" || input === null) {
            break;
        }
        words.push(input); 
        console.log(words);
    }
    let sortedWords = words.sort();

    console.log(sortedWords);

    
    
}