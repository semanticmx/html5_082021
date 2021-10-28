const back = document.getElementById('back');
const go = document.getElementById('go');
const forward = document.getElementById('forward');

const home = document.getElementById('home');
const about = document.getElementById('about');
const replace = document.getElementById('replace')

// back() Method
back.addEventListener('click', e =>{
	history.back();
});

// forward() Method
forward.addEventListener('click', e =>{
	history.forward();
});

// go() Method
go.addEventListener('click', e =>{
	const num = parseInt(prompt('Enter a number'));
	history.go(num);
});

// pushSate() Method
home.addEventListener('click', e =>{
	history.pushState({
		page: 'home'
	}, 'home', '/home');
	document.body.append("##Home State## ")
});

about.addEventListener('click', e =>{
	history.pushState({
		page: 'about'
	}, 'about', '/about');
	document.body.append("##About State## ")
});

// replaceState() Method
replace.addEventListener('click', e =>{
	history.replaceState({
		page: 'replaced'
	}, 'replace', '/replace')
	document.body.append("##State Replaced## ")
});

//Pop State
window.addEventListener('popstate', e =>{
	console.log('Pop State: ', history.state);
});