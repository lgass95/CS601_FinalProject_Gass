//event listener
document.addEventListener("DOMContentLoaded", function(){
    //declare variables
    let words = [];
    let count = 0;
    //validation loop
    while(true){
        let input = prompt ("If you enter a series of words, this program will convert them to an array and sort them alphabetically. Try it out! (Enter \"q\" to finish).");
        let word = /[A-Za-z]/.test(input);
        if (input === "q" || input === null) {
            break;
        }else if (!word) {
        alert("Words must only contain alphabetical letters.");
        }else{
        words.push(input); 
        console.log(words);//log to console
        count++;//word count increment
        console.log(count);//log to console
        document.getElementById("counter").innerHTML = count;
        }
    }
    //sort words entered alphebetically
    let sortedWords = words.sort();

    console.log(sortedWords);
    //append words to list in HTML
    let list = this.getElementById("wordList");
    words.forEach((word) => {
        let li = document.createElement("li");
        li.innerText = word;
        list.appendChild(li);
    });
    //allow user to reset program
    document.getElementById("reset").addEventListener("click", function(){
        location.reload();
    });
});