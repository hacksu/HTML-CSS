# HTML, CSS, and JavaScript
We'll be using [JSFiddle](https://jsfiddle.net/) to give an introduction to [HyperText Markup Language](https://www.w3schools.com/html/), [Cascading Style Sheets](https://www.w3schools.com/css/), and [JavaScript](https://www.w3schools.com/js/), the tools for designing a website!

## What is JSFiddle?
[JSFiddle](https://jsfiddle.net/) is a website that provides a nice interface to prototype and host code and see your changes appear as you type them. Its really useful for trying stuff out and sharing your code with others.

We'll be using it because we can get right into coding without any setup.

#### [Click Here to Start Coding with JSFiddle](https://jsfiddle.net/)

## Alright, so what is HTML?
[HyperText Markup Language](https://www.w3schools.com/html/) is a format used to structure a webpage. Your browser recognizes HTML and can organize the content on your website based on how you define it to!

Let's start with the basics.
1. [Header](https://www.w3schools.com/tags/tag_hn.asp)
2. [Paragraph](https://www.w3schools.com/tags/tag_p.asp) and [Pre](https://www.w3schools.com/tags/tag_pre.asp)
3. [Div](https://www.w3schools.com/tags/tag_div.asp) and [Span](https://www.w3schools.com/tags/tag_span.asp)

```html
<!-- our main header -->
<h1>Some cool Pokémon</h1>
<!-- sub-header (aka, slightly smaller) -->
<h2>they do be makin a good squad</h2>
<!-- paragraph text -->
<p>Pokémon are pretty cool. Here we can put some text saying whatever we want.</p>
<!-- the <pre> tag is similar to <p>, except it
 respects existing formatting such as newlines. -->
<div>
  this content is separated
</div>
```

## "Cascading Style Sheets"? What does that even mean...???
[Cascading Style Sheets](https://www.w3schools.com/css/) is how we add some snazzy styling to our website! While HTML sets up our structure, like the foundation and walls of a house; CSS is the paint, materials, and furnishing!

We can apply CSS in 3 ways.
1. Inline Style Attribute
2. Style Tag
3. Linked Style Sheet

```html
<!-- Inline Style Attribute -->
<div style="background-color: red">
  hey this should be a red box!
</div>
<!-- Style Tag -->
<style>
  h1 {
    /* Give our title the color orange! */
    color: orange;
  }
</style>
```

#### Linked Style Sheets
This is where "cascading" comes in.

You can create CSS files that will include your styles, and then import them into your webpages! You can combine as many or as little of these as you want!

In JSFiddle, we'll be using the Style window for most of our styling. They handle linking the stylesheet for us.

Let's import and use a font!
```html
<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
<style>
  h1 {
    font-family: 'Pacifico';
  }
</style>
```

While inline styling and attribute styling can do everything stylesheets can, its just good practice to put CSS in its own spot so your project is nicely organized.

For small one-off things like making only a single paragraph have a different font size or something; its perfectly fine to just inline style it.
```html
<p style="font-size: 23px;">
  content
</p>
```

## Lets add some Pokémon
Now that you understand the basics of how HTML and CSS works, we can dive deeper.

```html
<!-- container for our pokemon -->
<div id="pokemon-container">
  <div class="pokemon">
    <img src="https://img.pokemondb.net/artwork/pikachu.jpg">
    <h2>Pikachu</h2>
  </div>
  <div class="pokemon">
    <img src="https://img.pokemondb.net/artwork/charizard.jpg">
    <h2>Charizard</h2>
  </div>
</div>
```

```css
#pokemon-container {
  text-align: center;
}
/* .pokemon INSIDE #pokemon-container */
#pokemon-container .pokemon {
  display: inline-block;
  padding: 20px;
  transition: transform 0.15s;
}
#pokemon-container .pokemon:hover {
  transform: scale(1.1);
}
```


## A small peak at JavaScript.
The code that makes websites do stuff.

While HTML and CSS structure and stylize your webpage, [JavaScript](https://www.w3schools.com/js/) allows you make your fresh new website do whatever you can imagine.

```html
<!-- create a script tag -->
<script>
  // print to the console
  console.log('Hi there!');
  // Function to run when we click a specific button
  function buttonClicked(button) {
    let original = button.innerHTML;
    // set the inner content of our button
    button.innerHTML = "I've been clicked!";
    // run the inner function after 5000 miliseconds, aka 5 seconds.
    setTimeout(function() {
      // revert to original content
      button.innerHTML = original;
    }, 5000)
  };
</script>
<button onclick="buttonClicked(this)">Click me!</button>
```

## Closing Remarks
Be sure to check out
- https://www.w3schools.com/ for some great beginner tutorials
- https://developer.mozilla.org/en-US/ for the raw documentation and references
- https://css-tricks.com/ for some fancy CSS stuff

#### Wasp/Hornet Public Directory
If you are a Computer Science student you can actually publish this code to your Wasp/Hornet directory!

Create a folder in the root of your home directory (aka, where you are once you login via ssh) called `public_html`, and then a file called `index.html` and you can put all your code in there!

Visit it at `https://web.cs.kent.edu/~USERNAME/`
(username being what you use to login to FlashLine, for me, its cseitz5)
