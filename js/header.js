let header=document.createElement('div');
canvas.append(header);
header.id='header';
header.style.width='100%';
header.style.height='5vh';
header.style.background='rgba(0,0,0,0.1)';
header.innerHTML=`رأس`;
header.style.display='flex';
header.style.flexDirection='column';
header.style.alignItems='center';
header.style.justifyContent='center';

let sidebar=document.createElement('script');
  sidebar.src='./components/sidebar.js';
  document.body.append(sidebar);
  
  console.log('header');