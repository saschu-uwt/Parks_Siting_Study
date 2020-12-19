var config = {
    style: 'mapbox://styles/saschu/cki6lwfbu16xn19s0m7e1tx93',
    accessToken: 'pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNraTQwdWpzcTBwcHcycW1pYXk2ZTVmcjMifQ.5yy1jBAaQbljA_srHfYajw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    mapAnimation: 'flyTo',
    title: 'Metro Parks Tacoma: Facility Siting Study',
    subtitle: '"I have endorsed the vision that everyone deserves a park or open space within a 10-minute walk of home." — Mayor Woodards',
    byline: 'This study identifies potential locations for future parks, open spaces or community centers in the city of Tacoma. Through spatial analyses of population densities and equity indices it prioritizes areas not already being served by Metro Parks Tacoma.',
    footer:'Links to this project\'s <a href="images/MPT_Poster.pdf" target="_blank">poster</a> and <a href="images/MPT_WP.pdf" target="_blank">white paper</a>.<br><b>Special thanks</b> to Renee Opatz of <a href="https://www.metroparkstacoma.org/" target="_blank">Metro Parks Tacoma</a>; Dr. Emma Slager and Dr. Matthew Kelley of the <a href="https://www.tacoma.uw.edu/" target="_blank">University of Washington Tacoma</a>; John Branigan on the <a href="https://www.mapbox.com/resources" target="_blank">Mapbox Solutions Architecture Team</a><br><b>Geospatial data:</b> <a href="https://www.metroparkstacoma.org/" target="_blank">Metro Parks Tacoma</a>, <a href="https://geohub.cityoftacoma.org/datasets/equity-opportunity-index-tacoma" target="_blank">City of Tacoma GeoHub Portal</a>, <a href="https://gisdata-piercecowa.opendata.arcgis.com/datasets/roads?geometry=-122.863%2C47.203%2C-122.209%2C47.284" target="_blank">Pierce County Open Geospatial Data Portal</a>, <a href="https://geo.wa.gov/datasets/WSDOT::wsdot-city-limits?geometry=-123.085%2C47.160%2C-121.778%2C47.323" target="_blank">Washington Geospatial Open Data</a>, <a href="https://data.census.gov/cedsci/table?t=Age%20and%20Sex&g=0500000US53053.150000&y=2018&tid=ACSDT5Y2018.B01001&hidePreview=false" target="_blank">U.S. Census Bureau</a>',
    chapters: [
        {
            id: 'map1',
            alignment: 'left',
            title: 'Step One: Identify the gap areas',
            image: 'images/PugetPark.jpg',
            description: 'Gray areas are the gap areas outside of a 10-minute walk to a Metro Parks facility (i.e. park, open space or community center). <b>The gap areas are the focus of this study.</b><br><br>Dark green areas are existing Metro Parks facilities. Light green areas show a 10-minute walk to these facilities. <br><br>',
            location: {
                center: [-122.55, 47.25],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'tacoma-boundary',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'tacoma-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'map3',
            alignment: 'left',
            title: 'Step Two: Identify high population density areas',
//            image: './path/to/images/target.svg',
            description: 'Densely populated areas are natural targets for investment of limited resources. Red zones show high density hot spot analyses of U.S. Census Bureau data. <br><br>The zone in North Tacoma is a high density cluster of the general population. The zone in South Tacoma is a high density cluster of youths under the age of 18.',
            location: {
                center: [-122.55, 47.25],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hs-populations',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'hs-populations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'map2',
            alignment: 'left',
            title: 'Step Three: Apply the Tacoma Equity Index',
            // image: 'images/PugetPark.jpg',
            description: 'The Equity Index is a form of opportunity mapping that highlights obstacles connected to upward mobility. <br><br>Red zones demonstrate hot spots of high equity with access to better opportunities to succeed. <br><br>In contrast, blue zones show low equity communities with limited access to institutional or societal investments.',
            location: {
                center: [-122.55, 47.25],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hs-equity',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'hs-equity',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chart1',
            alignment: 'left',
            title: 'Step Four: Analysis',
            image: 'images/chart_Youth_Equity.png',
            description: 'Tacoma\'s youth population from very low Equity Index neighborhoods are disproportionately underserved in the gap areas.',
            location: {
                center: [-122.55, 47.25],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hs-equity',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'hs-equity',
                    opacity: 0
                }
            ]
        },
        {
            id: 'map4',
            alignment: 'left',
            title: 'Recommendations',
//            image: './path/to/images/target.svg',
            description: 'Two zones within the gap areas make strong candidates for Tacoma’s next park, open space or community center. <br><br>A new facility in North Tacoma (denoted in red) would serve a high general population cluster and coincide with high Equity Index scores. <br><br><b>A new facility in the South End (shown in blue) would benefit a high youth population cluster and coincide with low Equity Index scores.</b> This option most closely aligns with the purpose of this study.',
            location: {
                center: [-122.5, 47.2],
                zoom: 12,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'recommendations',
                    opacity: 1,
                    duration: 1000
                }

            ],
            onChapterExit: [
                {
                    layer: 'recommendations',
                    opacity: 0
                }
            ]
        }
    ]
};
