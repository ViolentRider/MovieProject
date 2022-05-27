const filmy = {
    zielonaMila: {
        rezyser: 'Frank Darabont',
        premiera: '06.12.1999',
        fabula: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.'
}
    ,skazaniNaShawshank: {
        rezyser: 'Frank Darabont',
        premiera: '10.09.1994',
        fabula: 'Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.'
    }
    ,forrestGump: {
        rezyser: 'Robert Zemeckis',
        premiera: '13.06.1994',
        fabula: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.'
    }
    ,gladiator: {
        rezyser: 'Ridley Scott',
        premiera: '01.05.2000',
        fabula: 'Generał Maximus - prawa ręka cesarza, szczęśliwy mąż i ojciec - w jednej chwili traci wszystko. Jako niewolnik-gladiator musi walczyć na arenie o przeżycie.'
    }
    ,szeregowiecRyan: {
        rezyser: 'Steven Spielberg',
        premiera: '21.07.1998',
        fabula: 'W poszukiwaniu zaginionego szeregowca wysłany zostaje doborowy oddział żołnierzy.'
    }
    ,pulpFiction: {
        rezyser: 'Quentin Tarantino',
        premiera: '21.05.1994',
        fabula: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.'
    }
};

const fruits = ['jabko', 'adam', 'ewa'];
document.getElementById("skazaniNaShawshank").innerHTML = `<img src="film1.png"> Skazani na Shawshank <br><br>Reżyser: ${filmy.skazaniNaShawshank.rezyser} <br> Premiera: ${filmy.skazaniNaShawshank.premiera} <br> Fabuła: ${filmy.skazaniNaShawshank.fabula}`;
console.log(filmy.pulpFiction);

