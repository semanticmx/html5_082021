# Offline Web Application

Offline web applications are web pages downloaded in the user device to be able to use offline.

## Cache Manifest

A manifest file is a list of all of the resources that your web application needs to access while It's offline. To save a file for later offline use, first, you got to point the manifest file within the <html> tag. This allows to cache the file.

```
    <!DOCTYPE html>
    <html manifest="/cache.manifest">
        <body>
            ...
        </body>
    </html>

```
After the above, we have to create a .appache file, inside the file we are going to pint the files that we want to cache.

```
CACHE MANIFEST
# v1

CACHE:
index.html

NETWORK:
*

FALLBACK
/ offline.html
```
## Syntax

Every manifest file starts with the following syntax:

```
CACHE MANIFEST
```

**CACHE**
CACHE is just the header, here we point hte file that we want to Cache
```
CACHE:
index.html
```

**NETWORK**
The line, NETWORK: is the start of the "online whitelist" section. The resources listed under this section are never cached and are not available offline.
```
NETWORK:
*
```

**FALLBACK**
In a fallback section, you can define substitutions for online resources that, for whatever reason, can’t be cached or weren’t cached successfully
```
FALLBACK
/ offline.html
```

**Comments**
Comments start with a #, spaces and blank lines are ignored.

## Web server

For the web server, the cache manifest file can ve located anywhere, but it mos be served with the content type ```text/cache-manifest```.