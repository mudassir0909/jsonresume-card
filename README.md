# stackoverflow-card
Ember your resume summary into your website. You need to have your resume published using [jsonresume](https://jsonresume.org/)

![screenshot](https://raw.githubusercontent.com/mudassir0909/jsonresume-card/master/assets/img/jr-card.png)

# Usage
Insert the following tag in your document where you wish to include the card.
**_This card occupies available parent container's `width`, so give some meaningful width to the parent element._**
```html
<div id="jr-card-widget" data-username="mudassirali" data-theme="default"></div>
```

* `data-username` must be your jsonresume profile username(For example: my profile url is http://registry.jsonresume.org/mudassirali).
* `data-theme` is the name of the theme you wish to use (default or minimal or custom). If no theme is specified the default theme `default` is used.

In addition to that you need to include the following `script` tag & voila !
```html
<script type="text/javascript" src="//mudassir0909.github.io/jsonresume-card/dist/1.0.0/jr-card-widget.min.js"></script>
```

# Look and feel Customization
The card supports two themes out of the box

### default
![Default Theme](https://raw.githubusercontent.com/mudassir0909/jsonresume-card/master/assets/img/jr-card.png)

### minimal
![screenshot](https://raw.githubusercontent.com/mudassir0909/jsonresume-card/master/assets/img/jr-card-theme-minimal.png)

### custom
When you specify this as an option. The stylesheet related to this card is not downloaded. You have to specify your own styles based on the class names. You can find the HTML structure [here](https://github.com/mudassir0909/jsonresume-card/blob/master/lib/jr-card-template.dot)


#### Note
These cards are not inserted using `iframe`, so change the look and feel as you like using your website's css. You can find the css [here](https://github.com/mudassir0909/jsonresume-card/blob/master/widget.less). Feel free to override them classes !
