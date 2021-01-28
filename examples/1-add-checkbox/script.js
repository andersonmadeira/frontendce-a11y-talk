const custom_checkbox = document.querySelector('.custom_checkbox')

function toggleCheckbox() {
  if (custom_checkbox.classList.contains('checked')) {
    custom_checkbox.classList.remove('checked')
  } else {
    custom_checkbox.classList.add('checked')
  }
  custom_checkbox.setAttribute(
    'aria-checked',
    !(custom_checkbox.getAttribute('aria-checked') === 'true')
  )
}

custom_checkbox.addEventListener('click', function (event) {
  toggleCheckbox()
})

custom_checkbox.addEventListener('keydown', function (event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    toggleCheckbox()
  }
})
