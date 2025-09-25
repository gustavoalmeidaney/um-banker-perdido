const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(Button =>{
   Button.addEventListener('click', function(){
   const atual = document.querySelector('.ativo');
   const proximopasso = 'passo-' + this.getattribute('data-proximo');

   atual.classList.remove('ativo');
   document.getElementById(proximopasso).classList.add('ativo');
   })
})