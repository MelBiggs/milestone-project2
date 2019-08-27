queue()
    .defer(d3.json, "data/Percentage of Irish Speakers to Non-Irish Speakers since 1926 to 2011.json")
    .await(Graph1926Onwards);

function Graph1926Onwards(error, irishSpeakerPercent) {

    
}
