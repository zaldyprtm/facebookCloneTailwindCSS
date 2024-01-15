
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('genderCheckbox');
  const genderForm = document.getElementById('genderForm');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      genderForm.classList.remove('hidden');
    } else {
      genderForm.classList.add('hidden');
    }
  });
});
