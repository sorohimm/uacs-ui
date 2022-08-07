import Axios from 'axios'

export default class CompetitionApi {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = process.env.REACT_APP_API_ENDPOINT;
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
        this.client = Axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
        return this.client;
    };

    getCompetitions = (params) => {
        return this.init().get("/competitions", {params: params});
    };

    createNewCompetition = (data) => {
        return this.init().post("/competition", data);
    };
}
