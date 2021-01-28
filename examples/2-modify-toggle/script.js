const customToggleButton = document.querySelector('.custom_toggle')

const toggleButton = () => {
  const marcado = customToggleButton.getAttribute('aria-checked') === 'true'
  customToggleButton.setAttribute('aria-checked', !marcado)
}

customToggleButton.addEventListener('click', function () {
  toggleButton()
})
