const apiKey = '8U7W0ON0jAcxTmiy85tAJaExF3wFsboo'

const getCityInfo = async (city)=>{
    const baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    const cityInfo = await fetch(baseurl+query)
    const data = await cityInfo.json();
    // console.log(data)
    return data[0]

}

getCityInfo('Karachi')



const getWeather = async (id)=>{
    const baseurl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${apiKey}`;
    const res = await fetch(baseurl+query);
    const data = await res.json();
    // console.log(data)
    return data[0]
}

getWeather('261158')