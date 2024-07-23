const incomingCtx = document.getElementById("incomingChart").getContext("2d");
const outgoingCtx = document.getElementById("outgoingChart").getContext("2d");

const incomingCtx = document.getElementById("incomingChart").getContext("2d");
const outgoingCtx = document.getElementById("outgoingChart").getContext("2d");

const incomingData = [12, 19, 3, 5, 2, 3, 10];
const outgoingData = [15, 10, 5, 8, 20, 15, 25];

const totalIncoming = incomingData.reduce((a, b) => a + b, 0);
const totalOutgoing = outgoingData.reduce((a, b) => a + b, 0);
const totalStock = totalIncoming - totalOutgoing;

document.getElementById("total-stock-value").innerText = totalStock;
document.getElementById("total-incoming-value").innerText = totalIncoming;
document.getElementById("total-outgoing-value").innerText = totalOutgoing;

const incomingChart = new Chart(incomingCtx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "입고",
        data: incomingData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const outgoingChart = new Chart(outgoingCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "출고",
        data: outgoingData,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
