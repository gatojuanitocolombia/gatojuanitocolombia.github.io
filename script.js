const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const show = document.getElementById("show");
const url = "https://www.youtube.com/watch?v=tYmCYZBHric"


yesButton.addEventListener('mouseenter', () => {
  yesButton.classList = ["button button3"];
  yesButton.innerText = "NO";
  noButton.classList = ["button button2"];
  noButton.innerText = "SI";
});

yesButton.addEventListener('mouseout', () => {
  yesButton.classList = ["button button2"];
  yesButton.innerText = "SI";
  noButton.classList = ["button button3"];
  noButton.innerText = "NO";
});

yesButton.addEventListener('click', () => {
  window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');  
});

noButton.addEventListener('click', () => {
  window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');  
});


