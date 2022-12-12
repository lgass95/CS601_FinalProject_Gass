<h1>Luke Gass Portfolio Website - CS 601 Final Project</h1>

<h2>Description:</h2>
    <p>This is a portfolio website I have created for CS 601. This site utilizes semantic HTML, CSS, and JavaScript to provide an aesthetically pleasing and intereactive experience for users and to demonstrate what I have learned during the semester. It was tested on Google Chrome, Mozilla Firefox, and Apple Safari.</p>

<h2>Design:</h2>
    <p> I decided to go with a simple, clean design overall, with a content container and background with a monochromatic color scheme. I think this lends to the flexibility of the design and makes it easier to change the layout on the mobile version. I also used text shadows and box shadows to provide some framing/depth. The overall layout is designed to be simple to navigate and make the content of each page prominent. I utilized media queries, flexbox, and CSS grid to make the pages adjust for screen sizes. I found that some of these methods worked better for some elements (for example, the grid layout for a photo gallery and blog posts) and also worked worked well together when combined. These changed the layout for smaller screens by making images smaller and text larger, and got rid of decoration on the margin to emphasize the content.</p>

<h2>Structure and Styling:</h2>
    <p>I used multiple semantic html elements on all of the main pages of the website. Though not all the elements were utilized on each page, the code contains the tags in order to provide a structure to the page that makes it easy to add to it later on. I also used many div elements as containers for styling purposes using CSS. The CSS that I added improved both the logic of the layout as well as the overall aesthetic of the site.</p>

<h2>Functionality:</h2>
    <p>I utilized JavaScript on multiple pages in the website. One feature that is on every page is a collapsible navbar at the top of the page. This bar hides the link elements for smaller screen sizes and opens to make it easier to navigate. Another major JS feature on the site is the photo gallery. This page has thumbnails of photos grouped under an "album" and when clicked they open a photo viewer and can be switched between. The photo viewer can be closed by clicking on it. The Contact page has a contact form that is validated using JS. The user is asked to fill out the required fields and is shown error messages when they have not been filled out. The fields validate for name and proper syntax for email addresses (the requirement of an @ symbol as well as a domain name, including a prepending period). The validation is done using a regular expression.</p>
    <p>The Experience page contains a list of links to portfolio projects that use JS at the bottom. These projects include a calculator, a fetch function that generates a table using JSON data, a tribute page that demonstrates Vue functionality in a single page application, and an array sorter that takes words entered, validates them, and then sorts them alphabetically and provides a word count. All of the features and projects demonstrate methods of changing the styling of pages, validating input from users, displaying alerts and prompts, making asynchronous requests and manipulating the DOM.</p>

<h2>Accessibility</h2>
    <p>Accessibility was an important consideration in the overall design. For example, I used sans-serif font for the text to make it readable for screen readers, but also used serif font for the printable version. I also made the text sizes adjustable to screen size. I included alt attributes for many of the photos to give detailed descriptions for those who may not be able to see them. Furthermore, there were several elements that used JavaScript that I was sure to compenste for by either hiding them when JS was disabled on the browser or providing alternatives altogether. This can be seen in the navigation, the photo gallery and the contact form on the Contact page, as well as in the apps linked on the Experience page.</p> 

<h2>Extra Features:</h2>
    <p>As mentioned above, I used media queries, flexbox and CSS grid to make the site responsive to different screen sizes. I also connected to an external API using fetch request on the home page. There were a number of ES6 elements that were utilized in different parts of the website, including let and const variables, template strings, arrow functions, and iterators.</p>

<h2>Features Added After Presentation:</h2>
    <p>I added a responsive navbar that collapses when the page is shrunk to a specific size. This leaves a clickable menu icon that opens and closes the menu for easier mobile navigation. This is replaced with the original navbar when javascript is turned off in the browser.</p>
    <p>I also added an array sorting app under Projects on the Experience page. This program takes input from the user, making sure to validate it as real words, puts them into an array, and sorts them alphabetically. Once the user is done inputting, the program displays the sorted list of words to them and provides a word count. If done with the console open, you can see each word and increment logged.</p>
    <p>Also under the Project section is a tribute page I build using Vue. It displays different vue functions, including changing two images by hovering over them with a mouse, adding a heading, changing the styling through text color and adding a working link to a button. I opted not to use Vue on any of the main pages as I thought it would be better to demonstrate as a single page applicaiotn this way without impacting the simple clean look of the site.</p>

<h2>Challenges:</h2>
    <p>Some of the most difficult challenges I faced while creating this website involved CSS and JavaScript. Using both involved quite a bit of trial and error that would result in distorting pages or breaking programs that took several hours to search for answers in.</p>
    <p>Another major challenge I ran into was using github. I created multiple branches for my project and at times it would not let me to update the main branch. Ultimately, I had to swap out the main branch for a different one.</p>
    <p>I had a very difficult time coming up with features for the website on my own. After creating the overall layout, I drew a blank in terms of what content to add in. In order to demonstrate my proficiency with javascript, I opted to add different portfolio examples along with some features to the site itself. I did not want to be overly ambitious with flashy features for the site and wanted to prioritize that it worked correctly first and foremost.</p>

<h2>*Note on CSS Navigation*</h2>
    <p>I added index markers to make it easier to sort through the sections of the main CSS document. Each section is a comment with a pair of straight vertical line '||' markers. To jump to different sections you can use the find command (command f on Mac) and type in those symbols.</p>

<h2>Issues:</h2>
<ul>
    <li>Validating the main CSS document gives a warning for using the color gradient I utilized in my main background as it is from an outside vendor since I generated it on a website.</li>
    <li>I ran into an error using developer view on Google Chrome because of a browser extension, but turning my extensions off fixed the issue.</li>
    <li>When going between pages between toggling the JavaScript on or off in Safari (particilarly with the applications linked on the Experience page), sometimes a no JS message will show when JS is turned on or vice-versa. This can be fixed by toggling JS on/off on that page.</li>
    <li>There can be issues using the navigation links using touchscreen mode in Chrome devtools. This seemed to resolve itself after giving the browser some time.</li>
    <li>There was a problem opening the resume PDF link in Chrome devtools. The documentation said it was due to "Quirks Mode" and it not being an HTML document.</li>
</ul>

   
    

<h2>References:</h2>
    <ul>
        <li><a href="https://www.w3schools.com/howto/howto_js_topnav_responsive.asp">https://www.w3schools.com/howto/howto_js_topnav_responsive.asp</a></li>
        <li><a href="https://stackoverflow.com/questions/39791995/the-files-ds-store-and-ds-store-had-a-tree-conflict-error-from-git-in-xcode-8">https://stackoverflow.com/questions/39791995/the-files-ds-store-and-ds-store-had-a-tree-conflict-error-from-git-in-xcode-8</a></li>
        <li><a href="https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/">https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/</a></li>
        <li><a href="https://www.youtube.com/watch?v=BR9sBx3LBHU">https://www.youtube.com/watch?v=BR9sBx3LBHU</a></li>
        <li><a href="https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/">https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/</a></li>
        <li><a href="https://stackoverflow.com/questions/18665171/how-to-make-the-main-content-div-fill-height-of-screen-with-css">https://stackoverflow.com/questions/18665171/how-to-make-the-main-content-div-fill-height-of-screen-with-css</a></li>
        <li><a href="https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element">https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element</a></li>
        <li><a href="https://glitch.com/edit/#!/cs601-assignment-5?path=README.md%3A1%3A0">https://glitch.com/edit/#!/cs601-assignment-5?path=README.md%3A1%3A0</a></li>
        <li><a href="https://javascript.info/default-browser-action">https://javascript.info/default-browser-action</a></li>
        <li><a href="https://www.geeksforgeeks.org/how-to-make-image-gallery-using-html-css-and-javascript/">https://www.geeksforgeeks.org/how-to-make-image-gallery-using-html-css-and-javascript/</a></li>
        <li><a href="https://www.w3schools.com/tags/tag_noscript.asp">https://www.w3schools.com/tags/tag_noscript.asp</a></li>
        <li><a href="https://validator.w3.org/#validate_by_input">https://validator.w3.org/#validate_by_input</a></li>
        <li><a href="https://jigsaw.w3.org/css-validator/#validate_by_input">https://jigsaw.w3.org/css-validator/#validate_by_input</a></li>
        <li><a href="https://jshint.com/">https://jshint.com/</a></li>
    </ul>