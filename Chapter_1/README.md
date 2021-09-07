# Media type (MIME Type)

In the following text, we are going to discuss MIME Types. MIME Types are unique identifiers for file formats. They are intended to provide a hint on how to interpret data.

MIME types are specified in the HTTP's request header or the ```<head>```tag, using accept attribute or content-type attribute.

Examples: 
text/html for HTML documents 
text/plain for plain text
text/cdd for CSS documents
text/javascript for JavaScript files

## Why use them?

As I said before, MIME types are intended to provide a hint on how to interpret data. In other words, MIME types tell the client or the server what kind of data should interpret.

Having said that, We can't just put a bunch of code expecting the code will work. To specify HTML files, the following syntax used to be used:

```<meta http-equiv="content-type" content="text/html"; charset="utf-8">```

But now, in HTML5 has been shortenend to: 

```<meta charset="utf-8">```

## References

Pilgrim, (s. f.). Dive Into HTML5 by Mark Pilgrim. diveintohtml5. Recuperado 7 de septiembre de 2021, de http://diveintohtml5.info/past.html