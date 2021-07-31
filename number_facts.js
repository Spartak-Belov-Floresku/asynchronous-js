const $button_1 = $('#submit_number')



$button_1.click(() =>{
    let num = $('#user_number').val();
    getFacts(num);
    $('#user_number').val('');
});


const getFacts = (num) => {

    $(".data_num").remove();

    let factsNum = [];
    
    for(let i = 0; i < 4; i++){
        factsNum.push(axios.get(`http://numbersapi.com/${num}/math?json`))
    }

    Promise.all(factsNum)
        .then(returnValues => (
            returnValues.forEach(val => {
                let div = `<div class='data_num container mt-2 text-center'>${val["data"]["text"]}</div>`;
                $("#num_facts").append(div)
            })
        ))
        .catch(err => console.log(err))

}

