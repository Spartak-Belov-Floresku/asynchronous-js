const $button_2 = $("#deck_of_cards_btn")


$button_2.click( async () => {

    let cards = $('.cards')
    if(cards.length > 51 || cards.length == 0){
        cards.remove()

        if(!localStorage.getItem("deck_id")){
            let result = await getIdDeck();
            localStorage.setItem("deck_id", result.deck_id)
        }else{
            await shuffleDeck ()
        }
        await getCrad()
    }else{
        await getCrad()
    }
    
});

const getIdDeck = async () =>{    

    try{

        let {data: deck_card_json} =  await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/`)

        return deck_card_json

    }catch(err){

        alert(`getIdDeck - ${err}`)

    }
}


const shuffleDeck = async () =>{
    try{

        await axios.get(`http://deckofcardsapi.com/api/deck/${localStorage.getItem("deck_id")}/shuffle/`)

    }catch(err){

        alert(`shuffleDeck - ${err}`)

    }
}

const getCrad = async () => {

    try{
        let {data: card_json}  = await axios.get(`https://deckofcardsapi.com/api/deck/${localStorage.getItem("deck_id")}/draw/?count=1`)
                
        let img = `<img src="${card_json.cards[0].image}" class="position-relative cards mt-2">`

        $("#deck_of_cards").append(img)

    }catch(err){

        alert(`getCard - ${err}`)

    }
            

}