const $button_1 = $('#submit_number')


$button_1.click(() =>{
    let num = $('#user_number').val();
    getFacts(num);
    $('#user_number').val('');
});


const getFacts = async (num) => {

    $(".data_num").remove();

    let factsNum = [];

    for(let i = 0; i < 4; i++){
        factsNum.push(axios.get(`http://numbersapi.com/${num}?json`))
    }

    let result = false

    try{
        result = await Promise.all(factsNum)
    }catch(err){
        console.log(err)
    }

    if(result){
        result.map(val => {

            let keys_arr = Object.keys(val.data)

            keys_arr.map(key => {

                let div = `<div class='data_num container mt-2 text-left'>${val.data[key]}</div>`;
                $("#num_facts").append(div)
                    
            })
                    
        })
    }
        

}

