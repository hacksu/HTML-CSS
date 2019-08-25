 HTML-CSS-JS
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

## What is JavaScript? 

Allows for functionality of HTML elements, and it is an object-oriented computer programming language used to create interactions within web browsers 

So in our HTML we are going to create a button tag <button> </button> You can type between the two tags to display what you would like the button to said
We have a button but at the moment is does not do anything functional. We are going to fix that by coding the component that links the JavaScript to the HTML. In the button tag, type onclick= “myFunction()” This line of code indicates that there is some element in the JavaScript called myFunction and onclick the button is going to do whatever that JavaScript says.

Since we have a button we can use to CSS to make it look more presentable. In our CSS code, type button{ width: 100px; height: 20px; background-color: white;}

Now what is that JavaScript going to do? Well in the JavaScript box we are going to create my function. 

Type function myFunction(){} This creates the myFunction; however, it is empty and we need to add what we want our button to. How about when we press the button an alert box will appear to display the alert box with a message inside. Therefore we need to add alert(“”)

*Stop and see if people need help*

Marvelous! Are we having fun with our basic site?! Great! So to recap once more we have a webpage created from HTML, CSS, and JavaScript that displays color, text, an image, and a button!

*Check time*

We still have time, so now we are going to add fancy animation and some CSS gradient!  
I like our button but I want to make it fancier. Lets change the color of our button, but I want it to have two colors displayed. Let’s add some CSS to this website for the button to make that happen. We are going to create an @keyframes which will help us to facilitate the animation by specifying the animation code. 

@keyframes example{
  from{background-color: white;}
  to{background-color:red;}
}

This code states that the term example will change from white to red  
Wonderful! 

Now in our button code in the CSS we are going to type 
animation-name: example;  animation-duration: as long as you like in seconds; 

WOW! Look at that animation!! However, I feel like our animation is out of place on our page, let’s change the page color to fit with the two colors in one element. 

Our CSS code is going to help us with this and the technique we are going to use is CSS gradient to help display a smooth transitions between two or more specified colors. So we are going to go to our body tag where we put our first background color and we are going to type 
                                                linear-gradient(red, black);
                                                
This line of code allows for the first color to be displayed on the top and transition into the next color. However, if we wan to switch it up some more we could type
                                                Linear-gradient(to right, red,black);
                                                
Now the gradient flows from the left to the right; Even better we can move it diagonally with
                                                 Linear-gradient(to bottom right, red, black); 
                                                 
Fantastic!! I am sure that your superhero would be proud to have this webpage represent them!!

*Check the code documents provided to work with the following code if we runout of time*
If we have time…  
Shake the Image   
I want the page to be more interactive so let’s shake things up! Shake the image by adding more CSS  
A form
