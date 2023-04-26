// В js объявляйте создайте массив с ссылками на картинки. На основе этого массива формируйте множество маленьких картинок в верхней части интерфейса.Пользователь нажимая на маленькие картинки видит их отображение в большем размере(только ту картинку, на которую он нажимал).


let arrayImages = [ 'https://i.ytimg.com/vi/BHACKCNDMW8/maxresdefault.jpg',' https://www.shutterstock.com/shutterstock/videos/1065170830/thumb/1.jpg?ip=x480', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KqETf_YTMaKfz4y7r6jlLOhn1xsBneBzoHRKJjHkdg&s', 'https://i.vimeocdn.com/video/957045096-8cc786ca5aad5230d1b66259f58efdda54d6f6d760ac31738e5d41abab95b397-d_640', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRES0k4_V3BilmdHXT38jMkEyUm1yYnN-8cavt2iuL_cg46Sz3P_KG3Ni19y071dkJuA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNR5ig6iTCFBqjjLBvTcUVCs5j-ye7XxP3-ELwv97WcnMYojC8U7OHmBKnm9rL88gws7A&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YFeXSKZeMHs14LjLGk6c8c5USM3oIiVVVc7n0PHJvJcljMJrILrwswtr5ueq8Ulgq3I&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAEAGZMqqXvj0KjLv8tfMyDM5wXXaC8yJ57jJhvzZI1GQG4lePVnr7GfOVosBVr1z3_g&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tZCBBJAR-vfjkKnl2Kj8mvXhHxQuaFI8y55iYkep9_YGdMfpb2-gLRWr_NSNsQMismY&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPV-mzdBzJq1P4p5H8rOrJE7Banr_NArvKQ&usqp=CAU'];

 

for(let i=0; i<arrayImages.length; i++){
    const imga = document.createElement('img');
    
    imga.setAttribute('src', arrayImages[i]);
    document.body.append(imga);

    imga.onmousedown = ()=> {
        imga.classList.add('activ');

    imga.onmouseout = ()=> {
        imga.classList.remove('activ');
    }
    }
}






