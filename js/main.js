let interruptor = document.getElementById('interruptor');
let root= document.documentElement;


interruptor.addEventListener('click', ()=>{

	root.classList.toggle('tema-claro');

})





const verMais= document.getElementById('ver__mais');
const projetos= document.querySelector('.projetos');



verMais.addEventListener('click', ()=>{
	projetos.classList.toggle('hidden');

})