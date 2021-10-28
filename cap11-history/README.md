# History API

The HTML5 history API is a standardized way to manipulate the browser history via script. The history API provides easy methods to access the windows.history object.


## back() Method

The back() method loads the previous URL in the windows.history list. It is the same as clicking the "back arrow" in your browser. Syntax:

```
	<script>
		function myFunction() {
		  window.history.back();
		}
	</script>
```

## forward() Method

Does the opposite thing of the back() method. It is the same as clicking the "forward arrow" in your browser. Syntax;

```
	<script>
		function myFunction() {
		  window.history.forward();
		}
	</script>
```

## go() Method

The go() method loads a specific URL from the history list.

```
	<script>
		function myFunction() {
		  window.history.go(-2);
		}
	</script>
```

## pushState() Method

pushState() adds an entry to the browser's session history stack. This allows to change the url. Syntax:

```
	history.pushState(state, title, url)
```

## replaceState() Method
replaceState() method modifies the current history entry, replacing it with the stateObj, title, and URL passed in the method parameters. Syntax:

```
	replaceState(stateObj, title, url)
```

## popsate event
The popstate event fires when we navigate to a page without a page reload. Returns an object containing a copy of the history entries