const home = document.getElementById("home");
const quran = document.getElementById("quran");
const azkar = document.getElementById("azkar");
const timeSq = document.getElementById("time-sq");
active = (e) =>{
    e.preventDefault();
    home.style.display="none";
    if(e.target.id == "qr" || e.target.id == "qr1"){
        quran.style.display = "block";
        azkar.style.display = "none";
        timeSq.style.display = "none";
    }else if(e.target.id == "hm"){
        home.style.display = "block";
        quran.style.display = "none";
        azkar.style.display = "none";
        timeSq.style.display = "none";
    }else if(e.target.id == "az" || e.target.id == "az1"){
        home.style.display = "none";
        quran.style.display = "none";
        timeSq.style.display = "none";
        azkar.style.display = "block";
    }else if(e.target.id == "sq" || e.target.id == "sq1"){
        home.style.display = "none";
        quran.style.display = "none";
        azkar.style.display = "none";
        timeSq.style.display = "block";
    }
    console.log("fff")
}