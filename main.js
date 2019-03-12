let text = ["Cycle The World", "Viajar El Mundo ", "Rowerem Przez Świat"];
let counter = 0;

const h1 = document.getElementById("changeText");
let interval = setInterval(change, 3000);

function change() {
  h1.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

// Smooth Scroll
$("#navbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 60
      },
      800
    );
  }
});
