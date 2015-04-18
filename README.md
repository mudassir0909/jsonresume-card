# jsonresume-card
Embed your resume summary into your website. You need to have your resume published using [jsonresume](https://jsonresume.org/)

![screenshot](https://raw.githubusercontent.com/mudassir0909/jsonresume-card/master/assets/img/jr-card.png)

[Example Demo](http://codepen.io/thomasdavis/pen/gbmRXe)

# Usage
Insert the following tag in your document where you wish to include the card.
**_This card occupies available parent container's `width`, so give some meaningful width to the parent element._**
```html
<div id="jr-card-widget" data-username="mudassirali"></div>
```

* `data-username` must be your jsonresume profile username(For example: my profile url is http://registry.jsonresume.org/mudassirali).
* `data-has-fontawesome` if this option is set to true then fontawesome is not downloaded separately, when you turned this on it is assumed that you are including fontawesome as part of your website.
* `data-theme` specify which theme to choose(not at all related to jsonresume themes). Available options are default & custom. If no theme is specified then `default` theme is used.

In addition to that you need to include the following `script` tag & voila !
```html
<script type="text/javascript" src="//mudassir0909.github.io/jsonresume-card/dist/1.0.0/jr-card-widget.min.js"></script>
```

# Look and feel Customization
The card supports two themes out of the box

### default
![Default Theme](https://raw.githubusercontent.com/mudassir0909/jsonresume-card/master/assets/img/jr-card.png)

### custom
When you specify this as an option. The stylesheets related to this card are not downloaded. You have to specify your own styles based on the class names. You can find the HTML structure [here](https://github.com/mudassir0909/jsonresume-card/blob/master/lib/jr-card-template.dot)


#### Note
These cards are not inserted using `iframe`, so change the look and feel as you like using your website's css. You can find the css [here](https://github.com/mudassir0909/jsonresume-card/blob/master/lib/widget.less). Feel free to override them classes !

### Credits
The UI is some what inspired from this [dribble shot](https://dribbble.com/shots/1048846-Author-Profile)
