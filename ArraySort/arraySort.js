document.addEventListener("DOMContentLoaded", function(){
    let words = [];
    let count = 0;
    while(true){
        let input = prompt ("If you enter a series of words, this program will convert them to an array and sort them alphabetically. Try it out! (Enter \"q\" to finish).");
        let word = /[A-Za-z]/.test(input);
        if (input === "q" || input === null) {
            break;
        }else if (!word) {
        alert("Words must only contain alphabetical letters.")
        }else{
        words.push(input); 
        console.log(words);
        count++;
        console.log(count);
        document.getElementById("counter").innerHTML = count;
        }
    }
    let sortedWords = words.sort();

    console.log(sortedWords);

    let list = this.getElementById("wordList");
    words.forEach((word) => {
        let li = document.createElement("li");
        li.innerText = word;
        list.appendChild(li);
    })
    document.getElementById("reset").addEventListener("click", function(){
        location.reload();
    });
});