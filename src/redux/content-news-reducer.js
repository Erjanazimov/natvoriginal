let TEXT_SIM = "TEXT-SIMVOL"
let ID_CHANNEL = "ID-CHANNEL"
let DATE_CHANNEL = 'DATE-CHANNEL'
let DATE_FETCH_SUMMA = "DATE-FETCH-SUMMA"
let SUMMA_TV_INPUT = "SUMMA-TV-INPUT";
let INFO_USER = "INFO-USER";
let RASMET_REKLAMA = "RASMESTY-REKLAMA"
let mas = []

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
        },
        {
            id: 7,
            channelName: "BOORSOK TV",
            photo: "https://natv.kg/cache/files/2662.png_w130_h65_resize.png",
            price: 4
        },
        {
            id: 8,
            channelName: "RUSSIA TODAY DOCUMENTARY (RТDOC)",
            photo: "https://natv.kg/cache/files/1979.jpg_w130_h65_resize.jpg",
            price: 4
        },
        {
            id: 9,
            channelName: "АВТОГИД ГАЗЕТА",
            photo: "https://natv.kg/cache/files/1831.jpg_w130_h65_resize.jpg",
            price: 4
        }

    ],
    summaTV: 0,
    SummaTVs: 0,
    textSimvol: "",
    idTvChannel: 0,
    datetvChannel: [],
    summaTvInput: {},
    total: 0,
    infoUser: {
        clientEmail: "",
        clientName: "",
        clientPhone: ""
    },
    rasmetReklama: []
}

let ContentNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_SIM:
            state.textSimvol = action.newText
            return state;
        case ID_CHANNEL:
            state.idTvChannel = action.idChannel
            return state;
        case DATE_CHANNEL:
            state.datetvChannel = action.dateChannel
            return state;
        case DATE_FETCH_SUMMA:
            state.summaWithoutDiscount = action.dateChannel
            return state;
        case SUMMA_TV_INPUT:
            state.summaTvInput = action.summatvinput
            return state;
        case INFO_USER:
            state.infoUser.clientPhone = action.infouser.tel;
            state.infoUser.clientEmail = action.infouser.email;
            state.infoUser.clientName = action.infouser.name
            return state;
        case RASMET_REKLAMA:
            state.rasmetReklama = action.rasmerekl
            return state
        default: return state;
    }
}

export let textsimvol = (text) => {
    return {type: TEXT_SIM, newText: text}
}

export let idTVContent = (idTV) => {
    return {type: ID_CHANNEL, idChannel: idTV}
}

export let dateChannel = (dateChannel) => {
    return{type: DATE_CHANNEL, dateChannel: dateChannel}
}

export let resdateobjsuma = () => {
    let obj = {};
    let resTV = {}
    let urlSumma = "https://na-tv.herokuapp.com/api/v1/order/get-summa";
    obj.channelId = initialState.idTvChannel;
    obj.dates = initialState.datetvChannel;
    obj.text = initialState.textSimvol;
    resTV.channelId = initialState.idTvChannel;
    resTV.dates = initialState.datetvChannel;
    mas.push(resTV)
    let options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    fetch(urlSumma, options)
        .then(response => response.json())
        .then(date => AddSumaChannel(date))

    return{type: DATE_FETCH_SUMMA, dateChannel: 0}
}

let AddSumaChannel = (date) => {
    initialState.summaTvInput.summa.textContent = date.summaWithoutDiscount + " сом";
    initialState.total += date.summaWithoutDiscount;
    initialState.summaTvInput.obshsum.textContent = ` ${initialState.total} сом`
    initialState.summaTvInput.inputText.textContent = initialState.datetvChannel;
}
export let SummaTvInput = (suminput) => {

    return {
        type: SUMMA_TV_INPUT, summatvinput: suminput
    }
}

export let InfoUsers = (info) => {

    return {
        type: INFO_USER, infouser: info
    }
}

export let RasmestyReklam = () => {
    let objChannel = {};
    objChannel.adText = initialState.textSimvol;
    objChannel.channels = mas;
    objChannel.clientEmail = initialState.infoUser.clientEmail;
    objChannel.clientName = initialState.infoUser.clientName;
    objChannel.clientPhone = initialState.infoUser.clientPhone;


    return{
        type: RASMET_REKLAMA, rasmerekl: ""
    }
}




export default ContentNewsReducer;