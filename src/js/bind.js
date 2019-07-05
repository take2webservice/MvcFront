document.addEventListener('DOMContentLoaded', () => {
  controller.load()
  document.querySelector('#save').onclick = controller.save
  document.querySelector('#leftArrow').onclick = controller.moveToOnsite
  document.querySelector('#rightArrow').onclick = controller.moveToOffsite
})
