# HTML, CSS, and JavaScript

We'll be creating local HTML files to give an introduction to [HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML), [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS), and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## What We're Building

By the end of this tutorial, you'll create a professional portfolio website that showcases your skills! Check out the `portfolio-template` folder to see what we're working toward - a complete website with:

- 🎨 **Modern design** with animations and responsive layout
- 📱 **Mobile-friendly** that works on all devices  
- ⚡ **Interactive features** powered by JavaScript
- 🚀 **Professional sections** including projects, skills, and contact info

But first, let's learn the building blocks that make websites work.

## Basic Website Structure

Every webpage has this basic template:

```html
<!DOCTYPE html>
<html>
<head>
<style>

[CSS goes here]

</style>
</head>
<body>

[HTML goes here]

<script>

[JavaScript goes here]

</script>
</body>
</html>
```

This is the basic template for an HTML page. You can copy this template, paste it into a text editor (like Notepad on Windows, TextEdit on macOS in plain text mode, or VS Code), save it with a `.html` extension (like `my-webpage.html`), and then open it in your web browser to see your webpage!

## Quick Start Guide

1. **Create a new HTML file**: Open your text editor and create a new file
2. **Copy the basic template**: Use the template above as your starting point  
3. **Save the file**: Save it with a `.html` extension (like `practice.html`)
4. **Open in browser**: Double-click the file to open it in your default web browser
5. **Edit and refresh**: Make changes to your HTML file, save it, then refresh the browser to see your changes

We also have a ready-to-use `template.html` file in this repository that you can copy!

## The Three Languages of the Web

**HTML** creates the structure and content
**CSS** handles the styling and layout  
**JavaScript** adds interactivity and behavior

Let's dive into each one:

---

# Part 1: Learning the Basics

## HTML: Adding Content to Your Page

HTML uses "tags" to structure content. Tags come in pairs with a start tag `<p>` and end tag `</p>`, with content in between:

```html
<p>Hello, World!</p>
```

**Try it yourself**: Replace the `[HTML goes here]` in your template with the paragraph above, save your file, and refresh your browser!

### Common HTML Tags

**Headings** create different sizes of titles:
```html
<h1>Pet Turtles Like Music</h1>
<h2>They Flip Their Legs In Waltz Tempo</h2>
```

**Images** display pictures:
```html
<img src="https://crouton.net/crouton.png" width="300" />
```

**Links** connect to other pages:
```html
<a href="https://drawing.garden" target="_blank">Click me!</a>
```

**Line breaks** create new lines:
```html
<p>You say goodbye <br /> and I say hello</p>
```

**Emphasis** makes text stand out:
```html
<p>Now, <strong>this</strong> is a story all about <em>how</em></p>
```

**Divs** group content together:
```html
<div>
  <h2>To-Do List</h2>
  <p>Walk dog</p>
  <p>Do laundry</p>
</div>
```

## CSS: Making Things Look Good

CSS controls how your HTML looks. It uses **selectors** to target elements and **properties** to change their appearance.

To create side-by-side columns, let's add some CSS. Replace the `[CSS goes here]` section with:

```css
#row-container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  font-family: sans-serif;
}
```

And update your HTML to wrap your divs:
```html
<div id="row-container">
  <div>
    <h2>To-Do List - Yesterday</h2>
    <p>Walk dog</p>
    <p>Solve world hunger</p>
    <p>Do laundry</p>
  </div>
  <div>
    <h2>To-Do List - Today</h2>
    <p>Walk dog</p>
    <p>Actually do laundry</p>
    <p>Be less sad</p>
  </div>
</div>
```

### CSS Selectors and Styling

You can target different elements in different ways:

**By ID** (use `#`):
```css
#row-container {
  background-color: lightblue;
}
```

**By tag name**:
```css
h2 {
  color: purple;
}
```

**By elements inside other elements**:
```css
#row-container p {
  color: purple;
  cursor: pointer;
}
```

**Interactive effects** with hover:
```css
#row-container:hover {
  background-color: paleturquoise;
}
```

There are [a lot of different named colors](http://davidbau.com/colors/) in CSS, so try random stuff there, knock yourself out.

![Chart of colored rectangles with their names overlaid.](colors.png)

## JavaScript: Making Pages Interactive

JavaScript adds behavior and interactivity to your websites. Replace the `[JavaScript goes here]` section with:

```js
const myName = prompt("what is ur name?");
alert("hello " + myName);
document.write(myName + " is here :D");
```

Save your file and refresh the browser to see JavaScript modify your page in real-time!

### Key JavaScript Concepts

**Variables** store information:
```js
const myName = "Alex";
const age = 20;
```

**Functions** perform actions:
```js
alert("Hello!");           // Shows a popup
prompt("Your name?");      // Gets user input
document.write("Hi!");     // Adds text to page
```

**Interactivity** responds to user actions:
```js
// Make list items clickable
const listItems = document.querySelectorAll("p");
listItems.forEach(item => {
  item.onclick = function() {
    this.style.textDecoration = "line-through";
  };
});
```

---

# Part 2: Building Your Portfolio Website

Now that you've learned the basics, let's put it all together to create something impressive: your own multi-page portfolio website! 

## What We're Building

In the `portfolio-template` folder, you'll find a complete portfolio website that demonstrates all these concepts and more. It includes:

- 🎨 **Modern multi-page design** with smooth navigation between sections
- 📱 **Mobile-friendly** responsive layout that works on all devices  
- ⚡ **Interactive features** powered by JavaScript across all pages
- 🚀 **Professional sections** including dedicated pages for projects, skills, about, and contact
- ✨ **Advanced CSS** with Grid, Flexbox, and custom animations
- 🔧 **Real JavaScript** functionality like form validation and scroll effects

## Portfolio Structure

The portfolio is organized as a professional multi-page website:

```
portfolio-template/
├── index.html          # Homepage with hero section and navigation
├── about.html           # Personal story, background, and statistics  
├── projects.html        # Project showcase with detailed descriptions
├── skills.html          # Technical skills with progress indicators
├── contact.html         # Contact form and information
├── style.css           # Main stylesheet for all pages
├── script.js           # Core JavaScript functionality
└── contact-form.js     # Contact form validation and handling
```

### Page-by-Page Overview

- **Homepage** (`index.html`): Landing page with hero section and preview cards
- **About** (`about.html`): Your story, background, and personal statistics
- **Projects** (`projects.html`): Showcase your work with project details and links
- **Skills** (`skills.html`): Display technical abilities with progress bars
- **Contact** (`contact.html`): Contact form, social links, and FAQ section

## Getting Started with Your Portfolio

1. **Navigate to the portfolio-template folder** and open `index.html` in your browser
2. **Read the Customization Guide** - Check out `CUSTOMIZATION_GUIDE.md` for detailed instructions
3. **Explore the structure** by clicking through all the navigation links
4. **Start customizing**:
   - Look for `TODO:` comments throughout the HTML files - these guide you on what to change
   - Replace placeholder content with your own information
   - Fill in the bracket placeholders like `[Your Name]` and `[Your Project]`
   - Update placeholder links and email addresses

### Learning-Friendly Features

The portfolio template is designed to be educational:
- **TODO Comments**: Every HTML file has helpful TODO comments showing exactly what to customize
- **Bracket Placeholders**: Look for `[Your Information Here]` to see what needs updating
- **Blank Templates**: Ready-to-use templates for adding your own projects and skills
- **Examples**: Sample content shows you the format and style to follow
- **Detailed Guide**: The `CUSTOMIZATION_GUIDE.md` file walks you through every step

5. **Customize the design**:
   - Modify colors in `style.css` by changing the CSS custom properties
   - Adjust fonts, spacing, and layout to match your style
   - Add your own personality to the content and animations

6. **Test everything**:
   - Check navigation between all pages
   - Test the contact form functionality
   - Verify responsive design on different screen sizes
   - Ensure all links and interactive elements work

## Portfolio Features Explained

The portfolio template uses everything you've learned and more:

### HTML Structure
- **Multi-page architecture** with consistent navigation across pages
- Semantic elements like `<nav>`, `<section>`, `<header>` on each page
- Proper meta tags for SEO and mobile responsiveness
- Accessibility features like alt text and proper headings

### CSS Styling
- **Unified design system** that works across all pages
- **Modern layouts** with CSS Grid and Flexbox
- **Responsive design** that adapts to all screen sizes
- **Page-specific styling** for unique content on each page
- **Professional animations** and hover effects

### JavaScript Functionality
- **Multi-page navigation** with active state indicators
- **Contact form validation** with real-time feedback
- **Interactive animations** like skill progress bars
- **Mobile-friendly** hamburger menu and responsive features
- **Smooth scrolling** and scroll-triggered animations

This portfolio will serve as both a learning project and a professional asset you can use to showcase your skills to potential employers or clients!

## Complete Example

Check out the `result.html` file in this repository to see a complete working example that demonstrates all these concepts together! You can open it in your browser to see a fully functional webpage with:

- HTML content and structure
- CSS styling and layout
- Interactive JavaScript functionality

## Tips for Local Development

- **Save frequently**: Always save your HTML file before refreshing the browser
- **Use a good text editor**: VS Code, Sublime Text, or even Notepad++ work well
- **Open Developer Tools**: Press F12 in most browsers to see errors and inspect your code
- **Test in multiple browsers**: Different browsers may display things slightly differently

## Next Steps

Try modifying the `result.html` file to:
- Change the colors and fonts
- Add more content
- Experiment with different layouts
- Add more interactive JavaScript features

---

### SEO (Search Engine Optimization)
- Add a `<title>` tag with a descriptive page title
- Include `<meta>` tags for descriptions and keywords
- Use semantic HTML tags like `<header>`, `<main>`, `<footer>`

### Accessibility
- Add `alt` attributes to all images
- Use proper heading hierarchy (h1, h2, h3...)
- Ensure good color contrast

### Example improved HTML template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <meta name="description" content="A brief description of your page">
    <style>
        /* CSS goes here */
    </style>
</head>
<body>
    <header>
        <h1>Your Website</h1>
    </header>
    
    <main>
        <!-- Main content goes here -->
    </main>
    
    <footer>
        <p>&copy; 2025 Your Name</p>
    </footer>

    <script>
        // JavaScript goes here
    </script>
</body>
</html>
```

## Troubleshooting Common Issues

**Site not loading?**
- Check that your main file is named `index.html`
- Verify all file paths are correct (case-sensitive on most servers)
- Make sure images and CSS files are uploaded to the correct locations

**Styling not working?**
- Check that CSS file paths are correct
- Verify there are no typos in your CSS selectors
- Use browser developer tools (F12) to debug

**JavaScript not working?**
- Check the browser console (F12) for error messages
- Verify all script tags are properly closed
- Make sure JavaScript is placed before the closing `</body>` tag

---

# Part 3: Making Your Website Live on the Internet

Now that you've created a website locally and built your portfolio, you probably want to share it with the world! Here are two excellent options for hosting your HTML, CSS, and JavaScript files for free.

## Option 1: Vercel (Recommended for Beginners)

[Vercel](https://vercel.com/) is a modern hosting platform that's perfect for static websites. It's completely free for personal projects and incredibly easy to use.

### Getting Started with Vercel

1. **Create a Vercel account**: Go to [vercel.com](https://vercel.com/) and sign up with your GitHub account (recommended) or email

2. **Prepare your files**: Make sure all your HTML, CSS, and JavaScript files are in a single folder on your computer

3. **Deploy your site**:
   - Click "New Project" in your Vercel dashboard
   - Choose "Import Git Repository" if your code is on GitHub, or
   - Drag and drop your folder directly onto the Vercel website
   - Vercel will automatically deploy your site and give you a live URL!

4. **Your site is live**: Vercel will provide you with a URL like `your-project-name.vercel.app` that you can share with anyone

### Benefits of Vercel:
- ✅ **Free forever** for personal projects
- ✅ **Automatic HTTPS** (secure connections)
- ✅ **Global CDN** (fast loading worldwide)
- ✅ **Custom domains** (you can use your own domain name)
- ✅ **Automatic deployments** (if connected to GitHub, updates when you push code)

## Option 2: University public_html Folder

If you're a student at Kent State or another university, you likely have access to a `public_html` folder on the university servers.

### Using public_html at Kent State

1. **Access your home directory**: 
   - Connect to the university server using SFTP, SSH, or the file manager provided by your university
   - Look for a folder called `public_html` in your home directory

2. **Upload your files**:
   - Copy your HTML, CSS, and JavaScript files into the `public_html` folder
   - Make sure your main page is named `index.html`

3. **Access your site**:
   - Your website will be available at a URL like: `https://www.cs.kent.edu/~yourusername/`
   - Replace `yourusername` with your actual university username

### Benefits of public_html:
- ✅ **Free** (included with your student account)
- ✅ **Educational** (good for learning about traditional web hosting)
- ✅ **University resources** (often has good bandwidth and uptime)

## Which Option Should You Choose?

**Choose Vercel if:**
- You want the easiest setup process
- You plan to continue web development after graduation
- You want modern features like automatic deployments
- You want to learn industry-standard tools

**Choose public_html if:**
- You want to learn traditional web hosting
- You're comfortable with file transfer protocols (FTP/SFTP)
- You want to keep everything within university systems
- You're interested in understanding how web servers work

## Making Your Site Even Better

Once your site is live, consider these improvements:

### Performance
- **Optimize images**: Use tools like [TinyPNG](https://tinypng.com/) to compress images
- **Minify CSS/JS**: Remove unnecessary spaces and comments for faster loading

### SEO (Search Engine Optimization)
- Add a `<title>` tag with a descriptive page title
- Include `<meta>` tags for descriptions and keywords
- Use semantic HTML tags like `<header>`, `<main>`, `<footer>`

### Accessibility
- Add `alt` attributes to all images
- Use proper heading hierarchy (h1, h2, h3...)
- Ensure good color contrast

## Your Journey Continues

Congratulations! You now have the skills to:
- ✅ **Create websites** with HTML, CSS, and JavaScript
- ✅ **Build professional portfolios** that showcase your abilities
- ✅ **Deploy your work** for the world to see
- ✅ **Continue learning** and growing as a web developer

Your portfolio is more than just a website - it's your professional presence on the internet. Keep adding projects, learning new technologies, and improving your skills. The web development journey is just beginning! 🚀

---
