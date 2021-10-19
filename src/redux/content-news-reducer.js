let ADD_POST = "ADD-POST"
let TEXT_SIM = "TEXT-SIMVOL"
let POST_ID = "POST-ID";
let SUMMA = "SUMMA"
let SUMMA_TV = "SUMMA-TV"
let COUNTER = 'COUNTER'
let initialState = {
    ContentNews: [
        {
            id: 1,
            channelName: "РЕН ТВ",
            photo: "https://natv.kg/cache/files/1285.jpg_w130_h65_resize.jpg",
            price: 4
        },
        {
            id: 2,
            channelName: "НТС",
            photo: "https://natv.kg/cache/files/1305.jpg_w130_h65_resize.jpg",
            price: 4
        },
        {
            id: 3,
            channelName: "КТРК",
            photo: "https://natv.kg/cache/files/1289.jpg_w130_h65_resize.jpg",
            price: 4
        },
        {
            id: 4,
            channelName: "ЛЮБИМЫЙ HD + CINEMAX HD",
            photo: "https://natv.kg/cache/files/2150.jpg_w130_h65_resize.jpg",
            price: 4
        },
        {
            id: 5,
            channelName: "ТНТ КЫРГЫЗСТАН",
            photo: "https://natv.kg/cache/files/1363.gif_w130_h65_resize.gif",
            price: 4
        },
        {
            id: 6,
            channelName: "СЕМЕЙНЫЙ + ДОМАШНИЙ",
            photo: "https://natv.kg/cache/files/1356.gif_w130_h65_resize.gif",
            price: 4
        }

    ],
    tvContent: {},
    textSimvol: "",
    dateText: [],
    summa: [],
    total: 0
}



let ContentNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_SIM:
            state.textSimvol = action.newText
            return state;
        case ADD_POST:
            state.dateText = action.Newdays
            return state;
        case POST_ID:
            state.tvContent = action.tvCont
            return state
        case COUNTER:
            state.total = 19
            return state
        default: return state;
    }
}

export let textsimvol = (text) => {
    return {type: TEXT_SIM, newText: text}
}

export let addPostActionCreator = (date) => {
     return {type: ADD_POST, Newdays: date};

}

export let addTotal = (sum) => {
    return {type: COUNTER, sum: sum};
}

export let sumaDateAdd = () => {
    let url = "https://na-tv.herokuapp.com/api/v1/order/get-summa";
    let obj = {}
    obj.channelId = initialState.tvContent.id;
    obj.dates = initialState.dateText;
    obj.text = initialState.textSimvol;

    let options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            SummaKanal(data)
            addTotal(data.summaWithDiscount)
        })

    return {
        type: SUMMA
    }
}

let SummaKanal = (data) => {
    let simTextdate = "";
    initialState.dateText.map(item => {
        simTextdate += ` ${item},`
    })
    initialState.tvContent.inptDate.textContent = simTextdate;

    if (initialState.dateText.length >= 3 && data.summaWithDiscount !== 0) {
        initialState.tvContent.suma.innerHTML = `
            ${data.summaWithDiscount} сом <span style="color: #c20937; font-size: 14px; text-decoration: line-through;
text-decoration-color: #c20937;">${data.summaWithoutDiscount} сом</span>`;
    } else {
        initialState.tvContent.suma.textContent = data.summaWithoutDiscount;
    }
}

export let idPost = (id) => {
    return{
        type: POST_ID, tvCont: id
    }
}


export default ContentNewsReducer;