const elements = ['.video-js .vjs-slider', '.assignfeedback_editpdf_widget', '.btn,#page-grade-grading-manage .actions .action,#rubric-rubric.gradingform_rubric #rubric-criteria .criterion .addlevel input,#rubric-rubric.gradingform_rubric .addcriterion', '.custom-control-label::before', '.switch input + label'];

for(let i = 0; i < elements.length; i++) {
  let element = document.querySelectorAll(elements[i]);
  for (let j = 0; j < element.length; j++) {
    element[j].style.userSelect = "text";
  }
}
