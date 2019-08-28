queue()
    .defer(d3.csv, "data/top2018.csv")
    .await(makeGraphs);

function makeGraphs(error, data) {
    var ndx = crossfilter(data);

    show_danceability(ndx);

    dc.renderAll();
}

function show_danceability(ndx) {
    var dim = ndx.dimension(dc.pluck('danceability'));
    var group = dim.group();

    dc.barChart("#danceability-chart")
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.linear())
        .xUnits(dc.units.linear)
        .elasticY(false)
        .xAxisLabel("Danceability")
        .yAxis().tick(20);



}

//let graphData = crossfilter(data);


// graphData.forEach(function(d) {
//     d.danceability = parseFloat(d.danceability);
//     d.energy = parseFloat(d.energy);
//     d.key = parseInt(d.key);
//     d.loudness = parseFloat(d.loudness);
//     d.mode = parseInt(d.mode);
//     d.speechiness = parseFloat(d.speechiness);
//     d.acousticness = parseFloat(d.acousticness);
//     d.liveness = parseFloat(d.liveness);
//     d.valence = parseFloat(d.valence);
//     d.tempo = parseFloat(d.tempo);
//     d.duration_ms = parseInt(d.duration_ms);
//     d.time_signature = parseInt(d.time_signature);
// });

// totalSongsChart(graphData);
// dc.renderAll();


// }

// function totalSongsChart(data) {

//     var dim = data.dimension(dc.pluck("id"));
//     var totalSongs = dim.group().reduceSum(dc.pluck("id"));

//     dc.numberDisplay("#totalSongsChart")
//         .formatNumber(d3.format(".2s"))
//         .group(totalSongs);
// }
