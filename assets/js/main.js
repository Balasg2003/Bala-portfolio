
(function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.progress').forEach(el=>{
      const val = el.getAttribute('data-value')||70;
      const bar = el.querySelector('span');
      setTimeout(()=>{ bar.style.width = val + '%'; }, 200);
    });
  });
  window.handleContact = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent('Portfolio inquiry from ' + name);
    const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
    window.location.href = 'mailto:balaselvamg2003@gmail.com?subject='+subject+'&body='+body;
    return false;
  }
})();
