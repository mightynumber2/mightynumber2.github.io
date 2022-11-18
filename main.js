const superBtn = document.getElementById('btn-super')

// Click superpowers button to reveal my list desc
superBtn.onclick = function() {
  superBtn.style.display = 'none'
  const superList = document.querySelectorAll('.profile-list li')
  
  superList.forEach((item, i) => setTimeout(() => {
    item.style.opacity = '1'
  }, i * 2500))
}