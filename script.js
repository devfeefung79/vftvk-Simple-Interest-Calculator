function showRate() {
  rate = document.getElementById("rate").value;
  document.getElementById("rate-text").innerHTML = rate + "%";
}

function compute() {
  p = document.getElementById("principal").value;
  rate = document.getElementById("rate").value;
  yr = document.getElementById("years").value;

  if (p == null || p == "") {
    p = 0;
  }
  let totalAmount = ((p * rate) / 100) * parseInt(yr);
  let currYr = new Date().getFullYear();
  let endYr = currYr + parseInt(yr);
  let displayText =
    'If you deposit <span class="hightlight-text">' +
    p +
    "</span>,<br/>" +
    'at an interest rate of <span class="hightlight-text">' +
    rate +
    '%</span>.<br/> You will receive an amount of <span class="hightlight-text">' +
    totalAmount +
    '</span>,<br/> in the year <span class="hightlight-text">' +
    endYr +
    "</span>";

  document.getElementById("result").innerHTML = displayText;
}
