const pet = {
    name: 'King Louie the Fourteenth',
    species: 'French Poodle',
    nickname: 'Louie',
    age: 14,
    bark:  function ()  {
        window.alert('WOOF!')
    },
    whine: function(){
        window.alert('wwwhhhhimmmpppeeeerrr!')
    },
    pant: function(){
        window.alert('pant pant pant')
    }
}

pet.bark()
pet.whine()
pet.pant()
