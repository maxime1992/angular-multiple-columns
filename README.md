Angular : Multiple columns (article like)
===================

# Why ?
You can totally do that with pure css3 !

If it's only to build one article it's fine, but if you have to build a lot of articles with a different number of columns according to screen size it might be more difficult.

Here's a [plunker](http://plnkr.co/edit/XionakrnmSpRJ7MN0aFj?p=preview) demo to try it live.

# Why Bootstrap columns are not enough ?
Of course, Bootstrap is great ! But when you need to have multiple columns **for the same text** it's not really appropriate and might be a struggle to setup something responsive as your columns won't have same height and it can easily become a mess.

The goal of this plugin is to keep it simple and build your responsive article in a matter of seconds.

Also, Bootstrap has some limits. As it's a 12 columns grid, if you want 1, 2, 3, 4, 6 or 12 columns it's good. But if you need 5, 7, 8, 9, 10, 11 columns, i wish you good luck (change the var in Bootstrap source code, compile it, etc). Here, no problem ! You can have as many columns as you want (if more than 12, don't forget to add some css classes).

# Getting Started
- Download or clone the lib :
```bash
git clone https://github.com/maxime1992/angular-multiple-columns.git
```

- Include the css :
```xml
<link href="./angular-multiple-columns.css" rel="stylesheet">
```

- Include the js :
```xml
<script src="./angular-multiple-columns.js"></script>
```

- Include angular module as one of your app's dependencies :
```javascript
angular.module('myApp', ['multipleColumns']);
```

- Then you just need to add the directive **multiple-columns** into your html and pass some arguments :
```xml
<multiple-columns
	col-xs="12"
	col-sm="6"
	col-md="4"
	col-lg="3"
	justify="true"
	text="Text to split">
	</multiple-columns>
```

# Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

In order to contribute, please run `npm test` and check you don't have any JSHint error :tada:.  
