<h1>Luke Gass Portfolio Website - CS 601 Assignment 2</h1>

<h2>Description:</h2>
    <p>This is a portfolio website I have created for CS 601. This iteration of the site adds CSS styling to the underling HTML structure to improve the overall look of the site.</p>
    <p>The changes I made to meet the requirements of the assignment are as follows:</p>
    <ul>
    <li>I added index markers to make it easier to sort through the sections of the CSS document. Each section is a comment with a pair of straight vertical line '||' markers. To jump to different sections you can use the find command (command f on Mac) and type in those symbols.</li>
    <li>Heading images were set to same height with automatic width. By using this I was able to remove styling attributes from the HTML document.</li>
    <li>I set margins for the pages to make content more concentrated at center
        and the text easier to read.</li>
    <li>I used sans-serif fonts for the web page presentation to make easier for screen readers.</li>
    <li>In terms of the media queries, I created three different versions of my pages: a regular one for screens the size of small laptops or smaller, a "mobile" version for touch screens up to the size of large tablets, and a print version.
        <ul>
            <li>The laptop and larger version was the standard that I started with. For this I emphasized visuals more and made a point to constrain the area of the content using margins to avoid too much unnecessary white space.</li>
            <li>For the mobile version, I shrunk down the images and got rid of the margins and made the text relatively larger using vw (viewport width) values to make it more readable. I also centered headings for a better look and enlarged links to make them easier to touch. I also narrowed the gallery and blog post grids and made my example blog post scrollable with the overflow attribute.</li>
            <li>The print version had similarities to the mobile version, including the centering of content, the removal of margins, the scaling down of images. Some key differences were that the images were scaled down to a greater degree, the sans-serif fonts were replaced with serif fonts for greater readabilty, and interactive elements such as links and videos were removed.</li>
        </ul>
    </li>
    <li>I added div containers to several elements to make them easier to reposition</li>
    </ul>
    

<h2>Challenges:</h2>
    <ul>
        <li>One part that I found challenging was making grid layouts for the blog and gallery sections. It took my a bit of time to arrainge everything in a satisfactory way.</li>
        <li>I found working with media queries extremely difficult. There was a lot of trial and error involved with getting the elements to shift in the ways that I wanted when changing the site's layout to a more mobile-firendly version.</li>
        <li>
    </ul>

<h2>Extras:</h2>
<ul>
    <li>I added a text-shadow attribute to all my h1 elements.</li>
    <li>I used a color gradient in the margins and box shadow to frame the content to give a stylized appearance without drawing focus. Credit for resources on gradients goes to Colin Ferguson who posted about them in this week's message boards.</li>
    <li>I styled the links using the link, hover, visited, and active attributes to give them different colors depending on which state they were in.</li>
    <li>I added a border radius to my bio image to give it a rounded appearance.</li>
    <li>I added an "Experience" page to keep information about my personal life and professional background separate.</li>
    <li>I used the span and background-color elements to demonstrate a highlighting feature in my example blog post.</li>
</ul>

<h2>References:</h2>
    <ul>
        <li><a>https://mycolor.space/gradient3</a></li>
        <li><a>https://www.makeuseof.com/css-flexbox-grid-which/</a></li>
        <li><a>https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing</a></li>
        <li><a>https://www.freecodecamp.org/news/how-to-center-an-image-in-css/</a></li>
        <li><a>https://www.computerhope.com/issues/ch001391.htm</a></li>
        <li><a>https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns</a></li>
        <li><a>https://granneman.com/webdev/coding/css/centertables</a></li>
        <li><a>https://www.w3schools.com/css/css_align.asp</a></li>
        <li><a>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator</a></li>
        <li><a>https://stackoverflow.com/questions/354739/why-should-i-use-a-container-div-in-html</a></li>
        <li><a>https://tutorial.techaltum.com/css_fixed_liquid_layout.html</a></li>
        <li><a>https://css-tricks.com/a-complete-guide-to-css-media-queries/</a></li>
        <li><a>https://www.lambdatest.com/blog/css-media-queries-for-responsive-design/</a></li>
        <li><a>https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries</a></li>
        <a><li>https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/</a></li>
        <a><li>https://css-tricks.com/touch-devices-not-judged-size/</a></li>
        <a><li>https://litmus.com/community/discussions/8146-media-queries-not-working-on-mobile</a></li>
        <a><li>https://linuxhint.com/change-font-size-media-queries/</a></li>
    </ul>