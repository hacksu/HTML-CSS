 HTML-CSS
 ===========
This is the first lesson of the Fall 2019 semester for Hacksu! It discusses the basics of HTML, CSS, and JS using Codepen as a work environment.

## What is Codepen?  
[Codepen.io](https://codepen.io/)

Used so that programmers can code and at the same time view what they are creating. Extremely ,helpful for all types of coding because it allows for the one to view how the components of the code interact as it is being written. 
Alrighty, so now that we know what we are working with let’s have some fun!
Normally introductory code pen lessons involve creating an About Me page, but I thought that it might be more fun to create a page advocating for your favorite superhero, and if you are not into superheroes, which is fine, you can create a page displaying your favorite tv show or game.

## What is HTML?
Hyper Text Mark Up Language, and is used to help add content to the web page. If you Google the term it will tell you that HTML is a standard system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Web pages. 
HTML houses items called tags and they represent and separate the different elements on a web page. 

We are going to discuss the following tags:
1. Header
2. Img
3. P

The first one that we are going to add is the header tag like so 
header tag The best superhero of all time is..... Header Tag  This will be our title for the document.
  
After that, it is important to add some type of representation for you page that helps the users to understand what you are supporting, for example, a picture will suffice.
After your h1 end tag in a new line type <img src= “” , this placement holder is where we are going to code our picture.
Open another tab on your browser and look for a picture that best suits your website. Once you have found it, you want to right click and copy the IMAGE ADDRESS. This is extremely important to note because the codepen will not display the image if you copy the image link.
After copying the image address paste it into the double quotation marks in the img tag, once the url is placed end the tag with alt=””(the name of your picture) and >
Wonderful! So now we have a codepen page with the headline “The Best Superhero is…” and a picture of said hero or another item. 

Does anyone need any help?

Great! Well let’s add some more context to our web page by adding the paragraph tags. Now we can type what ever you want inside of these tags and it will format to a paragraph. So go ahead and write a bit if you want as to why your chosen selection is the best. 

*Wait a moment and check to make sure that everyone is up to speed*

Ok, so I definitely like what we have here; however, it is not as appealing as it could be. This is where our CSS code comes into play

## What is CSS?
Cascading Style Sheets, and they describe how HTML elements are to be displayed on screen, paper, or in media. 
So to start with CSS are going to give the background some color by typing 	

body{
  background: color;
}

Now there are many different ways to add color to webpages through CSS: 
1.	One of them is to type the name of the color like we just did with (white, red, black, or blue)  
2.	However, what if you want a certain type of color that is not as plain and simple as blue or purple.  Well that is where the use the second coloring method comes into play. The other one that we are going to discuss is the use of hexadecimal coloring   
  a.	Online we can search for a chart with all of the hexadecimal colors on it (w3schools)   
  b.	This website is extremely helpful for applications involving CSS, HTML, and JavaScript 
  
Fabulous! After the background color, let’s change the format of the words in our h1 and p tags

H1{
Text color : Can use hexadecimal or name  
background:linear-gradient(#6CC4EE, white)
Text-align aligns the words on the page whether it be toward the left, right, or center
(My favorite) font-family allows for the user to choose how they view the font and it is compatible with all of the fonts on word documents 
    Examples: 
                     Algerian 
                    Ar Bonnie 
                    Comic Sans 
                   Times New Roman 
                   Berlin Sans FB 
                   Blackadder 
                    Font  
Font size is written as value px which stands for pixels 
}

*Stop and make sure that everyone is up to speed* 

Ok, so now we have a colored background with a picture and some fancy text, but we can most certainly do better. 
To help better separate text, lets had some borders to the h1 and p tag. 
Inside of the curly brackets type, border-style: ….. whatever you want 
     Some of the types are
1.	Dotted 
2.	Dashed
3.	Solid
4.	Double 
5.	Groove
6.	Ridge 

After that we are going to add a border width. Awesome! The next text element that we are going to do is create a text-shadow. This will give the text that we have a more dynamic look. The command for that is text-shadow: 2px 2px; The pixel dimensions can change depending upon how drastic you would like the words to look. 

*Check things out*

Next we are going to center the picture that we have. Go back to your HTML code and inside of the img tag type class=”center”. 
What we have just done is added a class to the HTML and a class allows for us to specify a specific element in the CSS 
So now in our CSS we are going to type 

.center{
  display:block;
  margin-left:auto;
  margin-right: auto;
  width: 50%;
}

Recap – So now we have this page with color, images, and text content, and with the help of CSS it looks a lot better than before, but let’s utilize JavaScript to help add functionality to the page through the use of a button 
