export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "56718641f2mshe4f4d66fe8dca17p101134jsnc71feedf4339",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '56718641f2mshe4f4d66fe8dca17p101134jsnc71feedf4339',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}