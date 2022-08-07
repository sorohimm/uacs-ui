import axios from 'axios'

export default class CompetitionApi {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = 'http://localhost:2604/'//process.env.REACT_APP_API_ENDPOINT;
    }

    init = () => {
        // this.api_token = getCookie("ACCESS_TOKEN");
        let headers = {
            Accept: "application/json"
        };
        if (this.api_token) {
            headers.Authorization = `Bearer ${
                this.api_token
            }`;
        }
        this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
        return this.client;
    };

    getCompetitions (params) {
        return loadCompetitions(); //this.init().get("/competitions", params).then(data=>console.log(data));
    };

    createNewCompetition = (data) => {
        return this.init().post("/competition", data);
    };
}

function httpGet(theUrl) {
    let getJSON = function httpGet(theUrl) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    };

    return getJSON(theUrl)
}

function getCompetitions() {
    return httpGet("http://localhost:2604/competitions")
}

function loadCompetitions() {
    let json = getCompetitions();
    return JSON.parse(json)
}
