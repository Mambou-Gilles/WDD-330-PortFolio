const links = [
  { label: 'Week 1 Notes', url: 'w01/index.html', },
  { label: 'Week 2 Notes', url: 'week2.html', },
  { label: 'Week 3 Notes', url: 'week3.html', },
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
