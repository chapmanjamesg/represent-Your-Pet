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
    },
    favoriteToys: [],
    play: function(toy){
        if(toy.includes('chewy')){
            this.favoriteToys.push(toy)
        }
    }
}

// pet.bark()
// pet.whine()
// pet.pant()

pet.play('chewy bones')
pet.play('chewy squirrel')

console.log(pet.favoriteToys)