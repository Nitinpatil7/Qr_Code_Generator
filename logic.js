const qrtext= document.querySelector('#input');
const sizes=document.querySelector('#sizes');
const generate_btn=document.querySelector('#generate');
const download_btn=document.querySelector('#download');
const qr=document.querySelector('.qr-body');


generate_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    qrtextcheck();
});

function qrtextcheck(){
    if(qrtext.value==''){
        alert('Type some for Generating');
    }else{
        generateqrcode();
    }

}
download_btn.addEventListener('click', ()=>{
    let img=document.querySelector('.qr-body img');
    if(img !== null){
        let imgattr= img.getAttribute('src');
        console.log(imgattr);
        download_btn.setAttribute('href',imgattr);
        alert('QR_Code.img Downloaded',)
    
    }else{
        download_btn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
})
function generateqrcode(){
  
        qr.innerText='';
        new QRCode(qr,{
            text: qrtext.value,
            height: sizes.value,
            width: sizes.value,
            colorLight:"#fff",
            colorDark:"#000"
    
        })

    
}