const $button_2 = $("#deck_of_cards_btn")


$button_2.click(() => {

    let cards = $('.cards')

    if(cards.length > 11 || cards.length == 0){
        cards.remove()
        getIdDeck();
    }else{
        getCrad()
    }
    
});



const getIdDeck = () =>{    
        
        axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/`)
                .then(val => { localStorage.setItem("deck_id", val["data"]["deck_id"]) })
                .then( getCrad() )
                .catch(err => { console.log(err) })

}


const getCrad = () => {

    axios.get(`https://deckofcardsapi.com/api/deck/${localStorage.getItem("deck_id")}/draw/?count=1`)
                .then(val => {

                    let card = val["data"]["cards"][0]["image"]

                    let img = `<img src="${card}" class="cards mt-2">`

                    $("#deck_of_cards").append(img)
            
                })
                .catch(err => { console.log(err) })

}