const elements = [
  '.video-js .vjs-slider',
  '.assignfeedback_editpdf_widget',
  '.btn,#page-grade-grading-manage .actions .action,#rubric-rubric.gradingform_rubric #rubric-criteria .criterion .addlevel input,#rubric-rubric.gradingform_rubric .addcriterion',
  '.custom-control-label::before',
  '.switch input + label'
]

elements.forEach(e => {
  e = document.querySelectorAll(e)
  e.forEach(e => {
    e.style.userSelect = 'text'
    e.style.WebkitUserSelect = 'text'
    e.style.MozUserSelect = 'text'
    e.style.msUserSelect = 'text'
  })
})
