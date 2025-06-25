document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (!isValidDate(day, month, year)) {
    document.getElementById("result").innerText = "🚫 Invalid date. Please enter a valid DOB.";
    return;
  }

  const dob = new Date(year, month - 1, day);
  const today = new Date();

  if (dob > today) {
    document.getElementById("result").innerText = "🚫 DOB cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerHTML =
    `🎈 You are <strong>${years} years</strong>, <strong>${months} months</strong>, and <strong>${days} days</strong> old.`;
});

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}
