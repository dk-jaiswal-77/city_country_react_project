export default function cityReducer(cities = {cities : []}, {type, payload}){
    switch(type){
        case "UPDATE_CITIES" :
            return {cities : payload};
        default :
            return cities;
    }
}