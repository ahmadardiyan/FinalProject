// PetaArray
function findLocation(x, y) {
    // console.log(x,y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent = places[ix].review;
    }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0 = "Rumah saya,harta yang paling berharga adalah keluarga...";
let r1 = "Tempat mengaji anak-anak dusun Macanan";
let r2 = "Tempat belajar mengaji saya";
let r3 = "Tempat Ibadah";
let r4 = "Outbond Macanan";
// EndPetaJSON

// Peta
let places = [{
        "lokasi": [-7.622487, 110.241963],
        "sponsor": "Home Sweet Home",
        "gambar": "img/mcn.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.620711, 110.242043],
        "sponsor": "TPQ Al-Izzah",
        "gambar": "img/tpq.jpg",
        "review": r1
    },
    {
        "lokasi": [-7.621715, 110.242529],
        "sponsor": "Musholah Al-Falah",
        "gambar": "img/al-falah.jpg",
        "review": r2
    },
    {
        "lokasi": [-7.620376, 110.242677],
        "sponsor": "Masjid Al-Amin",
        "gambar": "img/al-amin.jpg",
        "review": r3
    },
    {
        "lokasi": [-7.619763, 110.242626],
        "sponsor": "Macanan Ground",
        "gambar": "img/mcn.jpg",
        "review": r4
    }
];

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap)
        .bindPopup(p.sponsor);
    marker.on('click', showLocation);
}
// EndPeta