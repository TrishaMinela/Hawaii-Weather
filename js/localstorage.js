// Check if the counter has already been incremented during this page load
if (!localStorage.getItem('counter_incremented')) {
  var n = localStorage.getItem('on_load_counter');

  if (n === null) {
    n = 0;
  }
  n++; // Increment by 1

  localStorage.setItem("on_load_counter", n);
  localStorage.setItem('counter_incremented', true); // Set flag to indicate counter has been incremented

  nums = n.toString().split('').map(Number);
  document.getElementById('visit').innerHTML = '';
  for (var i of nums) {
    document.getElementById('visit').innerHTML += i ;
  }
}
