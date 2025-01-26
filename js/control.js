if(data!=null){
    // Font
    const font = new FontFace('cairo', 'url(./components/cairo.ttf)');
    font.load().then(() => {document.fonts.add(font); document.body.style.fontFamily = 'cairo';});
    // Body
    document.body.style.boxSizing='border-box';
    document.body.style.padding='0';
    document.body.style.margin='0';
    document.body.style.width=screen.width;
    document.body.style.height='100vh';
    document.body.style.display='flex';
    document.body.style.flexDirection='column';
    document.body.style.alignItems='center';
    document.body.style.justifyContent='center';
    // Canvas
    const canvas=document.querySelector('#canvas');
    canvas.style.width='100%';
    canvas.style.height='100vh';
    canvas.style.display='flex';
    canvas.style.flexDirection='column';
    canvas.style.alignItems='center';
    canvas.style.justifyContent='center';
    canvas.style.background='white';
    // Header
    setTimeout(() => {
     canvas.innerHTML='';
     let header=document.createElement('script');
     header.src='./components/header.js';
     document.body.append(header);
   }, 1000);
   }