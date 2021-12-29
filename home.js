const body = document.getElementById("body");
let contein = ["https://www.imagenesvarias.com/wp-content/uploads/2017/11/Gatos-7.jpg", "https://farm2.staticflickr.com/1960/30689176927_f04b6206d2_o.jpg", "https://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/fotos-de-gatitos-0.jpg", "https://farm2.staticflickr.com/1960/30689176927_f04b6206d2_o.jpg", "https://th.bing.com/th/id/R.4512ab5661bf3cc4fed10679932a5187?rik=QOzN%2bALX0LRckA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-zOxq-zR4YW8%2fT4PwPHa-INI%2fAAAAAAAAM2Y%2faO23tfB51xU%2fs1600%2fcat%25252Cgatitos%2btiernos%25252Czoomgraf.blogspot%2b%2525288%252529.jpg&ehk=6dtl%2bCFUZQEsv4MLfWfYu3fCWqb0fpaLzibNoWe%2bdHQ%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.2a4cbc7bc29d1621f87410bdb7bd2878?rik=weX7gG5ajz2%2boQ&riu=http%3a%2f%2fwww.mundogatos.com%2fUploads%2fmundogatos.com%2fImagenesGrandes%2ffotos-de-gatitos-5-3.jpg&ehk=eOruB%2bbr5G5NBMrTO%2bOeGjR86wg05jqbToZJbd31zlo%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.533134592b30c3066525e53861a3aa9c?rik=b%2fjxX3uvpas5vw&riu=http%3a%2f%2fgatos.mascotahogar.com%2fImagenes%2fnombres-de-gatos.jpg&ehk=MPkrV2uubTZBrwPgN4mFBGwDKipvWf39%2fsp8dsJ9y0M%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.168bb9423a5ae055a35788231e49fcd1?rik=rVmRCi9v9MoF5w&riu=http%3a%2f%2fwww.mundogatos.com%2fUploads%2fmundogatos.com%2fImagenesGrandes%2ffotos-de-gatitos-3.jpg&ehk=njXqZkk5lZCVWLhhYFsLlZEEc%2bbwjl7Ep%2b7GPM1CMU8%3d&risl=&pid=ImgRaw&r=0", "https://farm2.staticflickr.com/1923/45579542682_1f393b5758_o.jpg", "https://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/gatos-siberianos-9-8.jpg","https://th.bing.com/th/id/R.abe5b02d332bb49bd2ddbe6c46ac8f10?rik=LigmSnAsQJmxIw&riu=http%3a%2f%2fwww.mundogatos.com%2fUploads%2fmundogatos.com%2fImagenesGrandes%2fg-gatos-siameses.html-8.jpg&ehk=Rp7yOtsuP4BAPvXRtmkCwUCanNwYOQCph4anomaq20k%3d&risl=&pid=ImgRaw&r=0"];
let i = 0;
let x = 0;
window.addEventListener("load", (e) => {
    if(x==0){
        let x = setInterval(() => {
            body.style.backgroundImage = `url(${contein[i++]})`
            if (i == contein.length) {
                i = 0;
            }
        }, 1000);
        body.classList.add("gatos")
    }
    x = 1;
})
