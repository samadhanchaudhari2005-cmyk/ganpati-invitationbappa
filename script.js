"""const target=new Date('2026-09-14T11:00:00').getTime();
setInterval(()=>{const e=document.getElementById('countdown');if(!e)return;const d=target-Date.now();if(d<0){e.textContent='🙏 गणपति बप्पा मोरया';return;}let days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);e.textContent=`${days} Days ${h}h ${m}m ${s}s`;},1000);
setInterval(()=>{let f=document.createElement('div');f.className='flower';f.textContent='🌸';f.style.left=Math.random()*100+'vw';f.style.animationDuration=(3+Math.random()*4)+'s';document.body.appendChild(f);setTimeout(()=>f.remove(),7000);},300);
function shareInvite(){if(navigator.share){navigator.share({title:'श्री गणेश उत्सव 2026',url:location.href});} }"""
