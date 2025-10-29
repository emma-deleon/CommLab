# Shanzai Web
######  Project 1 (27.10.25) <p align="right">*by Emma*</p>
---
<br>

![banner](img/readme/sw-header.png)
# Part A

## Intel (?)
#### A more transparent website

![index_ss](img/readme/index.png)

*On the surface, this website appears to be the official Intel site. Underneath lies the information that companies like Intel try to gloss over* 

<p align="center">
<img src="img/readme/pg-one.png" alt="page one 1/2" width="200"/>
<img src="img/readme/pg-one2.png" alt="page one 2/2" width="200"/>
<img src="img/readme/pg-two.png" alt="page two" width="200"/>
</p>

**Abstract:**\
Many companies are becoming increasingly more AI-heavy/positive. Companies tend to display AI as a neutral technology and fail to portray the full scale of how gathering resources for their systems and maintaining them affect people and the environment. I chose to take over [Intel’s website](https://www.intel.com/content/www/us/en/homepage.html) to send this message. I kept many elements of the original website the same, and change/added elements to suit my narrative. **(If you are interested in seeing my recreation of the website before I added changes, check out the [*recitation version*](https://emma-deleon.github.io/CommLab/project-1/) of this assignment).** For the aspects of my website where I added text or images, each element can be clicked to find where those sources come from. Feel free to look around and learn more about the processes behind where our technology comes from and how it is currently sustained.

---
<br>

![banner2](img/readme/banner2.jpeg)

# Part B



## 1: Design and Composition

When doing the initial copy of Intel's website, I used Inspect to get a general sense of the element hierarchies ([PDF of analysis](../shanzai-web/anatomy-of-a-website/intel-annotated.pdf)). From that, I got an understanding of which elements were grouped, and used that as inspiration to structure my website. For the most part, I kept everything the same since my goal was to make the website look as normal/accurate as possible at first glance, and have the true content reveal itself after clicking around.
<br>
<br>
The [newsroom](https://emma-deleon.github.io/CommLab/project-1/ai-revolution.html) page of my site is structured after [Intel's separate newsroom](https://newsroom.intel.com/artificial-intelligence/intel-and-nvidia-to-jointly-develop-ai-infrastructure-and-personal-computing-products) site, which is why there is a change in the navigation bar. While my [products](https://emma-deleon.github.io/CommLab/project-1/copy-performance-and-efficency.html) page keeps the same structure as the original, the newsroom page uses the original essay to encourage users to scroll. As you scroll, the screen darkens and the text overlaps and becomes distorted. I believe this adds a feeling of falling into darkness, metaphorically mirroring the darkness that lies beneath the facade of "neutral AI".
<br>
<br>
As for the hovering effects, everything is kept the same as the original Intel website, except for the change in cursor to one that shows an error when the user hovers over an element that has nothing linked to it. I hoped that when people explore my page, they will see these errors, realize that this is not the real Intel page, and search around to find what they can click. I also added an animation if an element was clicked to further indicate that the link does not work.

## 2: Technical 
The HTML of my page is structured into a top > middle > bottom order. Most of each main group is styled with flexbox with more divs inside of each group. Below is an example structure with the nav bars of my website:
<br>
<br>
- Top: Floating Nav and Nav
    - The floating nav is fixed to the bottom of the page. It consists of `<p>` aligned with flexbox.
    - The Nav is broken into 4 section with `<div>`. Logo > Left > Middle > Right. The left side has divs for each item, the middle is blank, just to add space with `<flex-grow>`, and the right side has divs for the icons and search bar.

The code for the Floating Nav can be seen below:

### HTML
```html
<div class="floating-nav">
    <p class="float-item" id="not-allowed">Downloads</p>
    <p class="float-div"><b>|</b></p>
    <a href="performance-and-efficency.html" style="text-decoration: none;"> 
        <p class="float-item">Products</p>
    </a>
    <p class="float-div"><b>|</b></p>
    <p class="float-item" id="not-allowed">Specs</p>
</div>
```

### CSS
```css
.floating-nav {
    border-radius: 100px;
    background-color: rgba(245, 245, 245, 0.8);
    padding: 20px;
    width: 280px;
    height: 5px;
    position: fixed;
    bottom: 20px;
    justify-self: center;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 5px 16px 3px #00000019;
    z-index: 3;
}

.floating-nav p {
    margin-top: -7px;
    font-size: 15px;
    color: rgb(0, 85, 149);
    letter-spacing: .3px;
}

.float-item:hover {
    color: rgb(98, 177, 238);
    cursor: pointer;
}
```

<br>
<br>
<br>


For classes and IDs, the classes are, for the most part, unique to each page. I used IDs where I would need to have an element span across all pages. An example of this is my ID: `id="not-allowed"`. This ID was used for every non-clickable element that was styled to look clickable. The coresponding CSS for this ID is as follows:

```css
#not-allowed:hover {
    cursor: not-allowed;
}
@keyframes shake {
  0%   { transform: translateX(0); }
  25%  { transform: translateX(-6px); }
  50%  { transform: translateX(6px); }
  75%  { transform: translateX(-4px); }
  100% { transform: translateX(0); }
}

#not-allowed {
    display: inline-block;
}

#not-allowed:active {
    animation: shake 0.36s linear;
}
```
When hovering over an element with the id `not-allowed`, the cursor will change to an error cursor, and if the element is clicked, the element will "shake".

<br>
<br>
<br>


The biggest issue that I encountered while making my recreation was the center image on my index page. On hover, the image should zoom in and a transparent gradient should overlay it. 
<br>


The HTML for this section was extremely simple:
```html
 <div class="spotlight-img">
    <img src="img/spotlight.avif" alt="spotlight image">
    <div class="overlay"></div>
</div>
```
It consists of a container with an `<img>` element and a `<div>` that holds the gradient overlay.
<br>

The CSS is where it gets more complicated. Getting everything to work properly required learning how to use `<z-index>` so that nothing got covered by another element. 
<br>

The overlay is set to `z-index: 1;` and the text div is set to `3` to keep it at the very top. The container for the image has `overflow: hidden` so that the image will stay in its original confines without spilling out.
<br>

On hover, the image scales up by `scale(1.08)` and the opacity of the gradient changes from `opacity: 0;` to `1`.

<br>

That is the gist of how that animation works. 




## 3: Reflection and Future Development
Based on the feedback I recieved from Gohai during the presentation, an issue with my website as of now is that the information that I want to present to the user is one click away. Since users may glance at the website for a few seconds and then click off, so I need something to keep the users attention and display the information with less clicks. *Maybe having a hover effect that reveals the changed elements?* Gohai also said I should consider adding parallax scrolling for the image collage I have after we learn JavaScript.

## 4: Credits & References
- Background Gradient and Text Line Height Changes
    - Leon gave me the idea to add a transition with scrolling and used the book "Extremely Loud & Incredibly Close" as inspiration for closing the line height until the page becomes black
    - [Gradient Guide](https://www.w3schools.com/css/css3_gradients.asp)
- [Cursor Animations (Keyframes)](https://prismic.io/blog/css-hover-effects#8-cursor-animations)
- [Zoom on Hover](https://www.w3schools.com/howto/howto_css_zoom_hover.asp)
- [Hiding Overflow From Zoom](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [Transparent Gradient Overlay](https://stackoverflow.com/questions/42725314/how-can-i-add-a-transparent-to-black-gradient-over-a-div-image)
- [Ordering Elements with z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)





