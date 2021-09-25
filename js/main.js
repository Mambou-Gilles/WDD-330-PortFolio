const links = [
  { label: 'Week 1', url: 'w01/index.html' },
  { label: 'Week 2', url: 'w02/index.html' },
  { label: 'Week 3', url: 'week3.html' },

];

const ol = document.getElementById('assignments');   
links.forEach(link => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.setAttribute('href', link.url);
  a.innerText = link.label;
  li.appendChild(a);
  ol.appendChild(li);
});
