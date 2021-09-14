# HTML5 Elements

An HTML5 Element is everything drom the start tag to the end tag. An HTML element is defined by a start tag, some content, and an end tag.

## THE DOCTYPE

The doctype declaration is information about what document type to expect. The syntax is:

```
<!DOCTYPE html>
```

## The Root Element

The other elements emerge from this root element.

``` <html></html>  ```

This element has within an attribute called lang. This attribute defines the language of the HTML page.

``` <html lang="en"> ```

## The ```<Head>``` Element

The head element is the first child or branch from the root element. The head element contains metadata. Metadata is information about the page.

``` <head> </head> ```

### Character Encoding

Character encoding is a group of bytes that form characters and symbols. There're different character encodings for various groups of characters and symbols. 

For example, the UTF-8 is an encoding for the western world,  and a JIS encoding refers to Japanese language encoding.

Normally the character encoding goes inside the meta tag

The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data. <meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

meta tag syntax:
```
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

Now in html5 this has been shortened to:

``` 
<meta charset="utf-8" />
```

The charset="utf-8" specifies the character encoding.

### Links

Links are divided into two categories; links to external resources (are used to augment the current document) and hyperlink links (are used to link to another documents). 

**```<a>``` Element**
a tag may contain text and usually appears in a document, whereas the link element doesn't have content.

**```<link>``` Element**
Appears in the head tag and could have all the same attibutes.

**Atributes**
- href: The target of the link.
- rel: The relationship type between two resources.
- rev: The reverse relationship.
- title: The title of the linked document.

## New Semantic Elements

### ``` <section> ``` Element
The section element defines a section in a document.

```
<section>
</section> 
```


### ``` <nav> ``` Element
The nav element defines a set of navigation links. The nav element is intended for large blocks of navigation links. However, *not all links in a document should be inside a nav element.*

```
<nav>
</nav>
```

### ``` <article> ``` Element
The article element specifies independent, self-contained content

```
<article>
</article>
```

### ``` <aside> ``` Element
The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content.

```
<aside>
</aside>
```

### ``` <hgroup> ``` Element
The hgroup element represents the heading of a section. The element is used to group a set of h1–h6 elements when the heading has multiple levels, such as subheadings, alternative titles, or taglines.

```
<hgroup>
    <h1>This tag</h1>
    <h2>Can wrap both tags</h2>
</hgroup>
```

### ``` <header> ``` Element
The header element specifies a header for a document or section. The header element should be used as a container for introductory content.

```
<header>
</header>
```

### ``` <footer> ``` Element
The footer element specifies a footer for a document or section A footer element should contain information about its containing element. footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.

```
<footer>
</footer>
```

### ``` <time> ``` Element
Defines a date/time.

```
<time datetime="2021-12-24 10:00">
```

### ``` <mark> ``` Element
Defines marked/highlighted text.

```
<mark> Highlight a text </mark>
```

