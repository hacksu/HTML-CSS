# HTML, CSS, and JavaScript

We'll be using [JSFiddle](https://jsfiddle.net/) to give an introduction to [HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML), [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS), and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

To start, go to JSFiddle: https://jsfiddle.net/. You should see four boxes on the page, with the labels HTML, CSS, and JavaScript, and "Result." This layout allows you to write code in the first three boxes and see the result in the other one all at the same time without having to have multiple windows open or anything. When we write stuff in the first three boxes, we're going to need to click "Run" or press Control-S and then the result will show up by where it says "Result." By the way, you can click minimize on the thing that says "Console." And one more thing: I would go into the "Settings" and uncheck the two settings that start with "Auto", because otherwise you'll be dealing with some autofill/autocomplete stuff that I think is more trouble than it's worth unless you're really used to it.

Okay: now we're set up, we can type code into these boxes, we just need to know what, in fact, we're typing, and where.

HTML, CSS, and JavaScript are the programming languages that web browsers understand. For this reason, they are very important. There are a lot of tools that you can use to design web pages without directly writing in these languages yourself, but those tools will all need to produce HTML, CSS, and JavaScript at some point, because a browser needs to see those before it can render a real live web page. They are the fundamental building blocks of the World Wide Web. Of these, HTML is the oldest and most fundamentalest; the [very first web page](http://info.cern.ch/hypertext/WWW/TheProject.html) was written in it in 1991. It is what you use to put stuff on your page. Web pages need stuff, so that's the first box we're going to write in.

So, HTML is a fundamentalest building block of the web, and the fundamental building blocks of HTML are called "tags." The first kind of tag is called a start tag, and it looks like this; there is a tag name (which is in this case just the letter "p") enclosed in angle brackets, which are what those greater than/less than signs are called when they are being used to enclose things.

```
<p>
```

Does anyone want to guess what the next kind of tag is called, the one that we're going to use after the start tag? It is an end tag. It is the same thing except that there's a forward slash in front of the tag name.

```html
<p></p>
```

And, wait! I almost forgot. There's one more thing you probably want to have with your start tags and end tags. That thing is called "content":

```html
<p>Hello, World!</p>
```

So there you have it. This is called an HTML element: there's a start tag, content, end tag, and the content shows up in the results square (for you too, right 🥺? You just have to hit "run"). And the weird thing is, we could stop here, that's all the HTML you really need to know.

Well. Maybe there's other stuff to learn. The weird thing about HTML is that unlike most programming languages, it's not really much of a programming language: HTML "programs" aren't necessarily interactive, it's not really grounded in logic or consistency, and everything is kind of based a lot on vibes. They don't want me to tell you this, but with a little help from the other web languages, you can stop listening here and make a whole beautiful web page out of \<p> tags if you want.

But there are, in fact, 140ish named tags other than the one named "p", so maybe we'd better figure out why. The thing, is "p" literally means "paragraph" - that's what it stands for, it's only one letter long because back when the first web page was created, the "aragraph" would've taken a long time to send - but that meaning is honestly mostly important because of the vibes that it imparts; or, what people with big fancy brains call its semantic meaning. We can bend space and time and use \<p> elements for all kinds of stuff, but the fact is, we've used a tag named "paragraph", we'd better have a pretty paragraphy use for it, or else we're contradicting ourselves and writing confusing code which we'll look back at a month later and hate ourselves for. And in accordance with this semantic meaning, browsers display a paragraph a certain way. They have black text in a proper-looking serif font at a medium font size, and, if you have multiple paragraphs, each is displayed below the previous one and there's a decent amount of space in between. It's very paragraphy.

```html
<p>I could not, would not, on a boat. I will not, will not, with a goat.</p>
<p>I do not like them in a house. I will not eat them with a mouse.</p>
```

Now, like I said, we could change how this stuff looks, and practically everyone does at least change the font, but for now, we should probably learn some of those other 140-something tags so we can let paragraphs be paragraphy and just take advantage of the semantic meaning and the pre-defined styles of the other ones. Like header tags:

```html
<h1>Green Eggs and Ham</h1>
<h2>Dr. Seuss</h2>
<p>I could not, would not, on a boat. I will not, will not, with a goat.</p>
<p>I do not like them in a house. I will not eat them with a mouse.</p>
```

So yeah, these are some other tag names, which happen to have numbers in them. And H1 and H2 stand for heading 1 and heading 2, with heading 1 having the semantic meaning of being more important and therefore, look, it shows up as bigger text by default. So, these are tags we should use for things like titles and author names. In theory there are also headings 3 through 12, which you can use if you like to signify less and less important headings. Um, you don't have to type all this exactly, but is everyone who wants to try out writing this HTML caught up?

Because next, I'm going to introduce something iconic and kind of weird: the anchor tag.

```html
<a>Click me!</a>
```

Well. You probably all know that that's not what it usually looks like. To release its true form, we need to add our first attribute. Attributes are placed after the tag name in the start tag and add some information to the HTML element.

```html
<a href="https://crouton.net/">Click me!</a>
```

So yeah. An anchor tag will create a link to another web page so you can go there if you click it. Except, wait, ours is kind of weird right now, because the new page will open inside the little JSFiddle box. Try this:

```html
<a href="https://crouton.net/" target="_blank">Click me!</a>
```

And now we have two examples of attributes. They live in start tags, go after the tag name, and say `this="that"`. The first thing is called the attribute name and the second thing, in quotes, is called the attribute value. The "href" attribute gives the information "what page should this link link to" and the "target" attribute gives the information "this page should be opened in a new tab." We need that second thing when using JSFiddle because we don't want the page we're linking to to be trapped in the box, but it's also useful whenever you want a link to open a new tab so the viewer doesn't lose their place on the last page or whatever.

And you might, at this point, feel a little like you're looking at a bunch of gibberish, and that is valid and okay. The thing about these web languages is that there's a bunch of stuff in them that made sense to someone at some point and now we're stuck with it because changing it would mean breaking compatability with a whole universe of old websites. This attribute name, "href," stands for "hypertext reference" because at some point someone thought that term would become a thing and then that term did not become a thing. However, it is immortalized in, for example, the very first web page and thus we just kind of have to learn it. Same with the "_blank" value for "target"; the underscore is there because of history. It might look a little strange and maybe it is but you can simply learn it and declare victory and move on.

Now that we have the basics down, we can probably go through some more types of tags pretty quickly. Watch this, you can put HTML elements inside HTML elements:

```html
<p>Now, <strong>this</strong> is a story all about <em>how</em></p>
```

Back in the day, they used to use tags just called "b" and "i" for a similar effect but those tags are old and everyone who's used them has died by now, and if you use them, you will have an encounter with ghosts.

"details" tags are interactive:

```html
<details>🤠</details>
```

You can add "summary" tags inside them to change the initially visible text:

```html
<details>
  <summary>Click here to say howdy</summary>
  🤠
</details>
```

Putting tags on different lines like that is allowed. HTML wants you to be able to format your code with spaces and newlines without changing how the content is displayed, so we can actually put new lines practically wherever we want. If we want to put an actual new line that will show up for real in the content, one thing that we can do use the \<br /> tag, which stands for line break:

```html
<p>
  You say goodbye <br />
  and I say hello
</p>
```

So if I remove that tag, there's no line break in the result, even though there is in the code. We need the \<br />. You may notice something weird about that particular tag: since there's no real content that it can encompass, there's no need for it to have a start and an end tag. Instead, it's what's referred to as self-closing: it ends just as it begins. (Most people will use that end-tag-style slash to indicate this, but you technically don't even need that.)

And here's another very popular self-closing tag:

```html
<img src="https://crouton.net/crouton.png" />
```

Images! You know them, you love them.

So, that was a lot of tags. Let's look over the chaos we have created.

All of those tags have some kind of specific purpose, indicated by their name. But there's one more tag we're going to look at that's extremely popular because it has no real specific purpose. This tag is called \<div>, which stands for content division, and it's basically the clear plastic tupperware of tags: you just put stuff in it. The idea is that you use it to divide content into sections, usually so that you can impose some kind of layout. For example, we can use them to group some elements into columns:

```html
<div>
  <h2>Shopping List</h2>
  <p>Ham</p>
  <p>Bread</p>
  <p>Eggs</p>
  <p>Dog food</p>
</div>
<div>
  <h2>Halloween costume ideas</h2>
  <p>Ham</p>
  <p>Bread</p>
  <p>Eggs</p>
  <p>Dog food</p>
</div>
```

So that's great. But these "columns" are just above and below each other, so the divs don't make much difference. Brace yourselves, because we're going to need to attempt to use CSS to alter the page layout to see what I mean. Click over to the CSS box in JSFiddle (finally, right?) and type this:

```css
div {
  display: inline-block;
}
```

Let's break this code down. The first thing we typed is a CSS selector, which specifies what elements we're altering. There are a lot of different ways to select elements in CSS, but this one is very simple: it selects all elements with the tag name "div" so we can do stuff to them. That stuff is expressed within the curly braces that immediately follow. There, we have one single declaration: `display: inline-block`. A declaration consists of a property, in this case "display", and a value, in this case "inline-block". There are many, many properties in CSS, each with their own set of possible values, but this property, the display property, is very popular, or at least it's used a lot; basically, it sets the layout mode that will be applied to elements that we're selecting. This is kind of like the anchoring mode that you can set for images in Microsoft Word. By default, divs have a "block" layout mode, which basically means that they go above and below each other and don't allow any elements to exist to the left or right of them. After we change this, our second div will be allowed to fill the space to the right of the first one.

You might have noticed that the image of a crouton is kind of interfering with our column layout. Or at least, I think it looks weird there. To fix this, we can select the image by its tag name and do the opposite of what we did with the divs; images are arranged according to the inline layout mode by default, but we can change that to "block":

```css
img {
  display: block;
}
```

We could be here for a while talking about the CSS display/layout modes, which melt brains, break spirits, and shatter families apart every day. But it would get boring, just rearranging stuff on the page for 72 hours straight, so I'm going to say "good luck" and move on. Our div columns are still kind of ugly because they're smashed together. Let's fix that with a whole batch of CSS properties.

```css
div {
  display: inline-block;
  text-align: center;
  margin: 20px;
  font-family: sans-serif;
}
```

These are relatively straightforward. The first one centers text. The second adds space around our divs; a margin is what you call the blank space around the content on a printed page, and we're adding blank space around our elements. We're expressing how much margin to add by using a distance expressed with the units "px", which stands for pixels. 1px is not actually the same size as one pixel on your screen, but it's close enough a lot of the time. The point is that you can make the number bigger or smaller and adjust it. Changing what we would normally call the font is done with the property font-family. Setting the font to sans-serif gets you a little closer to how text is actually displayed on most websites.

Now we're experienced with CSS rules. This is really all you do with CSS; you put a selector to indicate which elements you're doing stuff too, and then you do stuff to them, like changing the text alignment. I should probably give everyone a second to catch up with these four basic rules that we're using.

And now that we're experienced with basic rules, let's try using some different selectors. Remember, those are the things in front of the curly braces that determine which elements we're controlling. In our columns, which are created by these divs, we have h2 elements for our list headers and p elements for our items. Let's try just selecting the p elements that are inside the columns, so we're just altering the items. We can do this by just putting `div p` as our selector; when you separate two tag names with a space, you select all the elements with the second tag name that are inside the first tag name; `div p` selects the content that's right after where you see the start tag `div` and then the start tag `p`.

```css
div p {
  color: purple;
  cursor: pointer;
}
```

Notice that the other paragraphs that we have up above haven't changed; only the ones inside divs did. (We could select all the paragraphs everywhere by just using "p" as a selector, but I want to let them rest.) One more really fun selector is the "hover" one, which selects elements only when your mouse is over them.

```css
div:hover {
  background-color: paleturquoise;
}
```

There are [a lot of different named colors](http://davidbau.com/colors/) in CSS, so try random stuff there, knock yourself out.

![Chart of colored rectangles with their names overlaid.](colors.png)

One thing that's bothering me there is that when we give our div a background color, we can see that the headers are pretty close to the left and right edge of the div. To fix that, we can just put a margin around the headers, just like how we put a margin around the divs themselves.

```css
div h2 {
  margin: 10px;
}
```

And that's probably enough CSS for one lifetime.

JavaScript is completely different from either of the two previous languages. It is an honest-to-god real programming language in which you write statements that are executed in sequence according to logical expressions that you specify. But if you're new to this kind of thing, don't worry too much - JavaScript is a full-on programming language where you can basically write any program that you can write in any programming language, but here, we're going to use it only for its original intended purpose - manipulating the things on the page that were originally created by a combination of HTML and CSS, so you should be able to follow along with the concepts even if the syntax gets kind of dense. As a programming language, JavaScript uses variables - so we're going to need to start by storing some HTML elements in a variable.

```js
const listItems = document.querySelectorAll("div p");
```

This is called an assignment statement, and basically what it does is store the thing on the right side of the equals sign in the name that's on the left side of the equals sign. The thing on the left side of the equals sign is called a variable. You might say that there are, in fact, two things on the left side of the equals sign, but the first thing, "const", is more like an annotation than a name: it just indicates that we're creating a brand new variable, which I am calling "listItems", and that that variable is going to be constant - I don't want to be able to change what's stored in it later. The thing on the right side of the equals sign is a function call that grabs all the HTML elements on the page that match the selector "div p". You've seen this selector before. We turned all these list items purple by using it up here, in the CSS. It turns out you can use these guys in JavaScript too. So, in summary, we are selecting all of our list items and storing them in a variable that is called "listItems".

The next thing we want to do is define a way to edit or alter the items that we have in our list. We are going to do that by creating what is called an event listener. An event listener is a type of function, which is a piece of code that can be run over and over again. You can define functions a few ways in JavaScript, but the most basic way is to write the following: the word "function"; the name of the function; a parenthesized list of names for the inputs to the function; and then the function's executable code inside curly braces.

```js
function crossOut(click) {
	click.target.style.textDecoration = "line-through";
}
```

An event listener is triggered by an event, and an event is a thing that a user does, such as: click. So the input to our function is a representation of a click that just happened, and thus I am using the word "click" as the name I want it to have. This particular representation, which is called an object, works sort of like a variable with more variables inside it. We can reach deep into this representation of someone clicking on something: we can access the target, which is an HTML element, and then the style of the target, which is the set of CSS rules that determine how it's displayed, and then the CSS property called "textDecoration", and then we can give it the  value "line-through". Unfortunately, all of these variable names except "click" are a built-in part of the browser's internal representation of events and HTML elements, which is called the Document Object Model or DOM, and they just have to be learned. I promise that they are pretty easy to learn when you study the DOM as its own thing but that would be a whole separate lesson, so for now, here are some names of things; string them together.

Finally, we are going to attach this event listener to each of the elements contained in our variable "listItems". We are going to do this with a for-loop, which is a programming construct that runs some code repeatedly, usually once for each item in a list or collection. This code will run over and over, once for each element in our list:

```js
for (const item of listItems) {
	item.onclick = crossOut;
}
```

What it does is simple: it assigns each HTML element that was captured in "listItems" to a variable named "item". Each HTML element exists in JavaScript as an object from the DOM, like I said, which means that the variable that it's stored in will have more variables inside it, and in this case we want to assign our function (which I called "crossOut") to the inner variable called "onclick".

Once we have done that, every actual real life click on one of these list elements will trigger our event listener function to run. This function will edit one of the CSS style rules that apply to our HTML element. So, look: when you click on one of our list items, it gets crossed out.

Now, you may notice that nothing in our HTML or CSS text boxes changes when this event listener executes. Our HTML and CSS serve to initially set up our webpage; once JavaScript starts executing, all bets are off, and the content of the page can diverge wildly from how it was originally specified. You can use the well-known "Inspect Element" tool that browsers provide to get a look at how the HTML and CSS would look if they kept up to date with the changes that JavaScript makes, although it might take a while to get used to all the stuff that that tool shows you.

[Final JSFiddle](https://jsfiddle.net/3t8ecud9/)

If we have time, there's one more thing that you can try if you want. I want you to open up a new blank plain text file in an editor like Notepad, TextEdit, or nano. Copy down or copy and paste the following HTML tags, I'll put them in the Discord:

```html
<html>
<head>
<style>
  /* Put CSS right below this */

</style>
</head>

<body>
<!-- Put HTML right below this -->

<script>
// Put JavaScript right below this

</script>

</body>

</html>
```

These are the actual most basic HTML tags that form the backbone for every page. This gives you an organized way to combine HTML, CSS, and JavaScript into a single final file; it's just standard boilerplate-type stuff and you can just find a template like this online and copy-paste that into every new webpage that you ever create. Within these tags, you should insert the content we have created where the comments say to (yes, each language has its own different style of comments that let you leave human-readable notes that don't do anything.) Then, you can save the file as a .html file. Then you can open it in your web browser. And then you can send the file to anyone, upload the file to website hosting services like Neocities or Github Pages, or place the file in a special folder that Kent gives you to make it available on the public Internet. (That requires a seperate program to log into a certain account that Kent gives you - we can go over that after the lesson if you want.) Anyway: HTML. CSS. JavaScript. Content, presentation, interactivity. Combine them and utilize all of their different powers. That is how you create a webpage.
