const div = document.querySelector('div')
for (let i = 1; i <= 100; i++) {
  const p = document.createElement('p')
  p.textContent = i
  div.appendChild(p)
}
window.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
})