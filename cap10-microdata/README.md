# Micro DATA

Microdata is a way to add custom information to elements. Microdata exist in libraries, these libraries have their own vocabularies, which are accessible via URL.

First, we have to determine whos the parent element of the script. Once we determine the parent element, all the child elements will have access to the vocabulary.

To do this first we have to add the itemscope attribute and the itemtype atribute with the url of the library

```
	<section itemscope itemtype="https://schema.org/Restaurant">
```

After the above, we use the itemprop attribute with specific properties within it. In our example we have the name of the brand, we can add microdata in the following way: 
```
	<h1 itemprop="brand">Super Taco</h1>
```

To sum up, first, we have to define the parent element. After defining the parent element we add two attributes, itemscope, and itemtype. This tells the web browser that the section is microdata and where to get the microdata.

Once the browser knows that the section is microdata we can start adding some properties with the itemprop atributte.

```
	<section itemscope itemtype="https://schema.org/Restaurant">
		<h1 itemprop="brand">Super Taco</h1>
		<div itemprop="hasMenu">
			<h2>Menu</h2>
			<ul>
				<li>Taco</li>
				<li>Burrito</li>
				<li>Gorditas</li>
			</ul>
		</div>
	</section>
```


Micro data is a way to semanti-fy your webpage. Browsers and search engines will have a better understanding of your webpage.

