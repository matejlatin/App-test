var app = angular.module('league', []);

// Today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = new Date(yyyy+'.'+mm+'.'+dd);
console.log(today);

app.controller('LeagueController', function(){
	this.games = matchday;
});

var matchday_dates = [
	{
		"matchday_number": "29",
		"matchday_start_date": "08.03.2015",
		"matchday_end_date": "16.03.2015"
	},
	{
		"matchday_number": "30",
		"matchday_start_date": "17.03.2015",
		"matchday_end_date": "22.03.2015"
	},
	{
		"matchday_number": "31",
		"matchday_start_date": "23.03.2015",
		"matchday_end_date": "06.04.2015"
	},
	{
		"matchday_number": "32",
		"matchday_start_date": "07.04.2015",
		"matchday_end_date": "13.04.2015"
	},
	{
		"matchday_number": "33",
		"matchday_start_date": "14.04.2015",
		"matchday_end_date": "20.04.2015"
	},
	{
		"matchday_number": "34",
		"matchday_start_date": "21.04.2015",
		"matchday_end_date": "26.04.2015"
	},
	{
		"matchday_number": "35",
		"matchday_start_date": "27.04.2015",
		"matchday_end_date": "02.05.2015"
	},
	{
		"matchday_number": "36",
		"matchday_start_date": "03.05.2015",
		"matchday_end_date": "09.05.2015"
	},
	{
		"matchday_number": "37",
		"matchday_start_date": "10.05.2015",
		"matchday_end_date": "16.05.2015"
	},
	{
		"matchday_number": "38",
		"matchday_start_date": "17.05.2015",
		"matchday_end_date": "24.05.2015"
	}
];

// Dates
var dateStart;
var dateEnd;
var dateTempStart;
var dateTempEnd;
var dateCompareStart;
var dateCompareEnd;

// API URL
var matchdayURL;

// Matchdays
var matchdayNumber;

for (var i = 0; i < matchday_dates.length; i++){
	dateTempStart = matchday_dates[i].matchday_start_date.split(".");
	dateTempEnd = matchday_dates[i].matchday_end_date.split(".");

	dateCompareStart = new Date (dateTempStart[2], dateTempStart[1]-1, dateTempStart[0]);
	dateCompareEnd = new Date (dateTempEnd[2], dateTempEnd[1]-1, dateTempEnd[0]);

	if (today >= dateCompareStart && today <= dateCompareEnd) {
		// Set the Start and End Dates
		dateStart = matchday_dates[i].matchday_start_date;
		dateEnd = matchday_dates[i].matchday_end_date;
		matchdayNumber = matchday_dates[i].matchday_number;
		console.log(dateStart, dateEnd, matchdayNumber);
	};

	matchdayURL = "http://football-api.com/api/?Action=fixtures&APIKey=07412121-854f-8cc8-e93280d3f141&comp_id=1204&&from_date=" + dateStart + "&&to_date=" + dateEnd;
	console.log(matchdayURL);

	$.ajax({
        url: matchdayURL,
        dataType: "json"
    }).success(function(data){
    	alert("success");
        // $('#content').append(JSON.stringify(data));
    });
};

var matchday = {
"APIVersion": 1,
"APIRequestsRemaining": 1000,
"DeveloperAuthentication": "TRUE",
"matches": [
{
"match_id": "1976661",
"match_static_id": "1755801",
"match_comp_id": "1204",
"match_date": "Mar 03",
"match_formatted_date": "03.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9008",
"match_localteam_name": "Aston Villa",
"match_localteam_score": "2",
"match_visitorteam_id": "9426",
"match_visitorteam_name": "West Brom",
"match_visitorteam_score": "1",
"match_ht_score": "[1-0]",
"match_ft_score": "[2-1]",
"match_et_score": "",
"match_events": [
{
"event_id": "19766611",
"event_match_id": "1976661",
"event_type": "goal",
"event_minute": "22",
"event_team": "localteam",
"event_player": "G. Agbonlahor",
"event_player_id": "2812",
"event_result": "[1 - 0]"
},
{
"event_id": "19766612",
"event_match_id": "1976661",
"event_type": "yellowcard",
"event_minute": "42",
"event_team": "visitorteam",
"event_player": "C. Yacob",
"event_player_id": "15089",
"event_result": ""
},
{
"event_id": "19766613",
"event_match_id": "1976661",
"event_type": "yellowcard",
"event_minute": "52",
"event_team": "visitorteam",
"event_player": "J. Lescott",
"event_player_id": "2873",
"event_result": ""
},
{
"event_id": "19766614",
"event_match_id": "1976661",
"event_type": "goal",
"event_minute": "66",
"event_team": "visitorteam",
"event_player": "S. Berahino",
"event_player_id": "149485",
"event_result": "[1 - 1]"
},
{
"event_id": "19766615",
"event_match_id": "1976661",
"event_type": "yellowcard",
"event_minute": "81",
"event_team": "localteam",
"event_player": "C. Clark",
"event_player_id": "89489",
"event_result": ""
},
{
"event_id": "19766616",
"event_match_id": "1976661",
"event_type": "yellowcard",
"event_minute": "86",
"event_team": "visitorteam",
"event_player": "C. Gardner",
"event_player_id": "2808",
"event_result": ""
},
{
"event_id": "19766617",
"event_match_id": "1976661",
"event_type": "yellowcard",
"event_minute": "88",
"event_team": "visitorteam",
"event_player": "S. Berahino",
"event_player_id": "149485",
"event_result": ""
},
{
"event_id": "19766618",
"event_match_id": "1976661",
"event_type": "yellowcard",
"event_minute": "88",
"event_team": "localteam",
"event_player": "A. Hutton",
"event_player_id": "820",
"event_result": ""
},
{
"event_id": "19766619",
"event_match_id": "1976661",
"event_type": "goal",
"event_minute": "90",
"event_team": "localteam",
"event_player": "C. Benteke (pen.)",
"event_player_id": "53423",
"event_result": "[2 - 1]"
}
]
},
{
"match_id": "1976658",
"match_static_id": "1755802",
"match_comp_id": "1204",
"match_date": "Mar 03",
"match_formatted_date": "03.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9221",
"match_localteam_name": "Hull City",
"match_localteam_score": "1",
"match_visitorteam_id": "9384",
"match_visitorteam_name": "Sunderland",
"match_visitorteam_score": "1",
"match_ht_score": "[1-0]",
"match_ft_score": "[1-1]",
"match_et_score": "",
"match_events": [
{
"event_id": "19766582",
"event_match_id": "1976658",
"event_type": "goal",
"event_minute": "15",
"event_team": "localteam",
"event_player": "D. N'Doye",
"event_player_id": "19142",
"event_result": "[1 - 0]"
},
{
"event_id": "19766581",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "12",
"event_team": "visitorteam",
"event_player": "W. Brown",
"event_player_id": "2910",
"event_result": ""
},
{
"event_id": "19766583",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "36",
"event_team": "visitorteam",
"event_player": "J. Rodwell",
"event_player_id": "23173",
"event_result": ""
},
{
"event_id": "19766584",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "41",
"event_team": "localteam",
"event_player": "P. McShane",
"event_player_id": "15438",
"event_result": ""
},
{
"event_id": "19766585",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "46",
"event_team": "visitorteam",
"event_player": "L. Bridcutt",
"event_player_id": "68660",
"event_result": ""
},
{
"event_id": "19766586",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "60",
"event_team": "visitorteam",
"event_player": "L. Cattermole",
"event_player_id": "2834",
"event_result": ""
},
{
"event_id": "19766587",
"event_match_id": "1976658",
"event_type": "goal",
"event_minute": "77",
"event_team": "visitorteam",
"event_player": "J. Rodwell",
"event_player_id": "23173",
"event_result": "[1 - 1]"
},
{
"event_id": "19766588",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "79",
"event_team": "visitorteam",
"event_player": "S. Larsson",
"event_player_id": "16025",
"event_result": ""
},
{
"event_id": "19766589",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "79",
"event_team": "localteam",
"event_player": "A. Robertson",
"event_player_id": "254527",
"event_result": ""
},
{
"event_id": "197665810",
"event_match_id": "1976658",
"event_type": "yellowcard",
"event_minute": "87",
"event_team": "visitorteam",
"event_player": "R. Alvarez",
"event_player_id": "80361",
"event_result": ""
}
]
},
{
"match_id": "1976657",
"match_static_id": "1755804",
"match_comp_id": "1204",
"match_date": "Mar 03",
"match_formatted_date": "03.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9363",
"match_localteam_name": "Southampton",
"match_localteam_score": "1",
"match_visitorteam_id": "9127",
"match_visitorteam_name": "Crystal Palace",
"match_visitorteam_score": "0",
"match_ht_score": "[0-0]",
"match_ft_score": "[1-0]",
"match_et_score": "",
"match_events": [
{
"event_id": "19766571",
"event_match_id": "1976657",
"event_type": "yellowcard",
"event_minute": "30",
"event_team": "visitorteam",
"event_player": "J. McArthur",
"event_player_id": "46511",
"event_result": ""
},
{
"event_id": "19766572",
"event_match_id": "1976657",
"event_type": "goal",
"event_minute": "83",
"event_team": "localteam",
"event_player": "S. Mane",
"event_player_id": "201602",
"event_result": "[1 - 0]"
},
{
"event_id": "19766573",
"event_match_id": "1976657",
"event_type": "yellowcard",
"event_minute": "90",
"event_team": "visitorteam",
"event_player": "D. Delaney",
"event_player_id": "15760",
"event_result": ""
}
]
},
{
"match_id": "1979136",
"match_static_id": "1755807",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9259",
"match_localteam_name": "Manchester City",
"match_localteam_score": "2",
"match_visitorteam_id": "9240",
"match_visitorteam_name": "Leicester",
"match_visitorteam_score": "0",
"match_ht_score": "[1-0]",
"match_ft_score": "[2-0]",
"match_et_score": "",
"match_events": [
{
"event_id": "19791361",
"event_match_id": "1979136",
"event_type": "yellowcard",
"event_minute": "36",
"event_team": "visitorteam",
"event_player": "P. Konchesky",
"event_player_id": "2713",
"event_result": ""
},
{
"event_id": "19791362",
"event_match_id": "1979136",
"event_type": "goal",
"event_minute": "45",
"event_team": "localteam",
"event_player": "D. Silva",
"event_player_id": "3026",
"event_result": "[1 - 0]"
},
{
"event_id": "19791363",
"event_match_id": "1979136",
"event_type": "goal",
"event_minute": "88",
"event_team": "localteam",
"event_player": "J. Milner",
"event_player_id": "2899",
"event_result": "[2 - 0]"
}
]
},
{
"match_id": "1979137",
"match_static_id": "1755808",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9287",
"match_localteam_name": "Newcastle Utd",
"match_localteam_score": "0",
"match_visitorteam_id": "9260",
"match_visitorteam_name": "Manchester United",
"match_visitorteam_score": "1",
"match_ht_score": "[0-0]",
"match_ft_score": "[0-1]",
"match_et_score": "",
"match_events": [
{
"event_id": "19791371",
"event_match_id": "1979137",
"event_type": "yellowcard",
"event_minute": "60",
"event_team": "visitorteam",
"event_player": "M. Rojo",
"event_player_id": "68939",
"event_result": ""
},
{
"event_id": "19791372",
"event_match_id": "1979137",
"event_type": "yellowcard",
"event_minute": "67",
"event_team": "localteam",
"event_player": "J. Gutierrez",
"event_player_id": "3206",
"event_result": ""
},
{
"event_id": "19791373",
"event_match_id": "1979137",
"event_type": "yellowcard",
"event_minute": "84",
"event_team": "visitorteam",
"event_player": "A. Valencia",
"event_player_id": "284",
"event_result": ""
},
{
"event_id": "19791374",
"event_match_id": "1979137",
"event_type": "goal",
"event_minute": "89",
"event_team": "visitorteam",
"event_player": "A. Young",
"event_player_id": "2553",
"event_result": "[0 - 1]"
}
]
},
{
"match_id": "1979138",
"match_static_id": "1755803",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9318",
"match_localteam_name": "QPR",
"match_localteam_score": "1",
"match_visitorteam_id": "9002",
"match_visitorteam_name": "Arsenal",
"match_visitorteam_score": "2",
"match_ht_score": "[0-0]",
"match_ft_score": "[1-2]",
"match_et_score": "",
"match_events": [
{
"event_id": "19791381",
"event_match_id": "1979138",
"event_type": "yellowcard",
"event_minute": "32",
"event_team": "localteam",
"event_player": "K. Henry",
"event_player_id": "15397",
"event_result": ""
},
{
"event_id": "19791382",
"event_match_id": "1979138",
"event_type": "yellowcard",
"event_minute": "34",
"event_team": "visitorteam",
"event_player": "H. Bellerin",
"event_player_id": "0",
"event_result": ""
},
{
"event_id": "19791383",
"event_match_id": "1979138",
"event_type": "goal",
"event_minute": "64",
"event_team": "visitorteam",
"event_player": "O. Giroud",
"event_player_id": "59504",
"event_result": "[0 - 1]"
},
{
"event_id": "19791384",
"event_match_id": "1979138",
"event_type": "goal",
"event_minute": "69",
"event_team": "visitorteam",
"event_player": "A. Sanchez",
"event_player_id": "4117",
"event_result": "[0 - 2]"
},
{
"event_id": "19791385",
"event_match_id": "1979138",
"event_type": "yellowcard",
"event_minute": "80",
"event_team": "localteam",
"event_player": "Yun Suk-Young",
"event_player_id": "78012",
"event_result": ""
},
{
"event_id": "19791386",
"event_match_id": "1979138",
"event_type": "goal",
"event_minute": "82",
"event_team": "localteam",
"event_player": "C. Austin",
"event_player_id": "99940",
"event_result": "[1 - 2]"
}
]
},
{
"match_id": "1979139",
"match_static_id": "1755809",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9378",
"match_localteam_name": "Stoke City",
"match_localteam_score": "2",
"match_visitorteam_id": "9158",
"match_visitorteam_name": "Everton",
"match_visitorteam_score": "0",
"match_ht_score": "[1-0]",
"match_ft_score": "[2-0]",
"match_et_score": "",
"match_events": [
{
"event_id": "19791391",
"event_match_id": "1979139",
"event_type": "yellowcard",
"event_minute": "14",
"event_team": "visitorteam",
"event_player": "G. Barry",
"event_player_id": "2800",
"event_result": ""
},
{
"event_id": "19791392",
"event_match_id": "1979139",
"event_type": "goal",
"event_minute": "32",
"event_team": "localteam",
"event_player": "V. Moses",
"event_player_id": "25395",
"event_result": "[1 - 0]"
},
{
"event_id": "19791393",
"event_match_id": "1979139",
"event_type": "yellowcard",
"event_minute": "52",
"event_team": "visitorteam",
"event_player": "S. Naismith",
"event_player_id": "1069",
"event_result": ""
},
{
"event_id": "19791394",
"event_match_id": "1979139",
"event_type": "goal",
"event_minute": "84",
"event_team": "localteam",
"event_player": "M. Diouf",
"event_player_id": "28948",
"event_result": "[2 - 0]"
},
{
"event_id": "19791395",
"event_match_id": "1979139",
"event_type": "yellowcard",
"event_minute": "89",
"event_team": "localteam",
"event_player": "A. Begovic",
"event_player_id": "30599",
"event_result": ""
},
{
"event_id": "19791396",
"event_match_id": "1979139",
"event_type": "yellowcard",
"event_minute": "90",
"event_team": "localteam",
"event_player": "J. Walters",
"event_player_id": "15748",
"event_result": ""
}
]
},
{
"match_id": "1979140",
"match_static_id": "1755810",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9406",
"match_localteam_name": "Tottenham",
"match_localteam_score": "3",
"match_visitorteam_id": "9387",
"match_visitorteam_name": "Swansea",
"match_visitorteam_score": "2",
"match_ht_score": "[1-1]",
"match_ft_score": "[3-2]",
"match_et_score": "",
"match_events": [
{
"event_id": "19791401",
"event_match_id": "1979140",
"event_type": "goal",
"event_minute": "7",
"event_team": "localteam",
"event_player": "N. Chadli",
"event_player_id": "49530",
"event_result": "[1 - 0]"
},
{
"event_id": "19791402",
"event_match_id": "1979140",
"event_type": "goal",
"event_minute": "19",
"event_team": "visitorteam",
"event_player": "Ki Sung-Yong",
"event_player_id": "26915",
"event_result": "[1 - 1]"
},
{
"event_id": "19791403",
"event_match_id": "1979140",
"event_type": "goal",
"event_minute": "51",
"event_team": "localteam",
"event_player": "R. Mason",
"event_player_id": "68627",
"event_result": "[2 - 1]"
},
{
"event_id": "19791404",
"event_match_id": "1979140",
"event_type": "goal",
"event_minute": "60",
"event_team": "localteam",
"event_player": "A. Townsend",
"event_player_id": "75627",
"event_result": "[3 - 1]"
},
{
"event_id": "19791405",
"event_match_id": "1979140",
"event_type": "yellowcard",
"event_minute": "62",
"event_team": "localteam",
"event_player": "E. Dier",
"event_player_id": "245831",
"event_result": ""
},
{
"event_id": "19791406",
"event_match_id": "1979140",
"event_type": "goal",
"event_minute": "89",
"event_team": "visitorteam",
"event_player": "G. Sigurdsson",
"event_player_id": "57707",
"event_result": "[3 - 2]"
}
]
},
{
"match_id": "1979141",
"match_static_id": "1755805",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "19:45",
"match_commentary_available": "",
"match_localteam_id": "9427",
"match_localteam_name": "West Ham",
"match_localteam_score": "0",
"match_visitorteam_id": "9092",
"match_visitorteam_name": "Chelsea",
"match_visitorteam_score": "1",
"match_ht_score": "[0-1]",
"match_ft_score": "[0-1]",
"match_et_score": "",
"match_events": [
{
"event_id": "19791411",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "13",
"event_team": "localteam",
"event_player": "C. Kouyate",
"event_player_id": "53112",
"event_result": ""
},
{
"event_id": "19791412",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "15",
"event_team": "visitorteam",
"event_player": "J. Terry",
"event_player_id": "181",
"event_result": ""
},
{
"event_id": "19791413",
"event_match_id": "1979141",
"event_type": "goal",
"event_minute": "22",
"event_team": "visitorteam",
"event_player": "E. Hazard",
"event_player_id": "39358",
"event_result": "[0 - 1]"
},
{
"event_id": "19791414",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "43",
"event_team": "localteam",
"event_player": "J. Collins",
"event_player_id": "2717",
"event_result": ""
},
{
"event_id": "19791415",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "45",
"event_team": "visitorteam",
"event_player": "E. Hazard",
"event_player_id": "39358",
"event_result": ""
},
{
"event_id": "19791416",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "67",
"event_team": "localteam",
"event_player": "K. Nolan",
"event_player_id": "2627",
"event_result": ""
},
{
"event_id": "19791417",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "70",
"event_team": "visitorteam",
"event_player": "C. Fabregas",
"event_player_id": "328",
"event_result": ""
},
{
"event_id": "19791418",
"event_match_id": "1979141",
"event_type": "yellowcard",
"event_minute": "90",
"event_team": "visitorteam",
"event_player": "D. Drogba",
"event_player_id": "310",
"event_result": ""
}
]
},
{
"match_id": "1979686",
"match_static_id": "1755806",
"match_comp_id": "1204",
"match_date": "Mar 04",
"match_formatted_date": "04.03.2015",
"match_season_beta": "",
"match_week_beta": "",
"match_venue_beta": "",
"match_venue_id_beta": "0",
"match_venue_city_beta": "",
"match_status": "FT",
"match_timer": "",
"match_time": "20:00",
"match_commentary_available": "",
"match_localteam_id": "9249",
"match_localteam_name": "Liverpool",
"match_localteam_score": "2",
"match_visitorteam_id": "9072",
"match_visitorteam_name": "Burnley",
"match_visitorteam_score": "0",
"match_ht_score": "[1-0]",
"match_ft_score": "[2-0]",
"match_et_score": "",
"match_events": [
{
"event_id": "19796861",
"event_match_id": "1979686",
"event_type": "goal",
"event_minute": "29",
"event_team": "localteam",
"event_player": "J. Henderson",
"event_player_id": "48010",
"event_result": "[1 - 0]"
},
{
"event_id": "19796862",
"event_match_id": "1979686",
"event_type": "goal",
"event_minute": "51",
"event_team": "localteam",
"event_player": "D. Sturridge",
"event_player_id": "5206",
"event_result": "[2 - 0]"
},
{
"event_id": "19796863",
"event_match_id": "1979686",
"event_type": "yellowcard",
"event_minute": "85",
"event_team": "visitorteam",
"event_player": "B. Mee",
"event_player_id": "97357",
"event_result": ""
}
]
}
],
"Action": "fixtures",
"Params": {
"Action": "fixtures",
"APIKey": "07412121-854f-8cc8-e93280d3f141",
"from_date": "03.03.2015",
"to_date": "06.03.2015",
"comp_id": "1204"
},
"ComputationTime": 1.675323009491,
"IP": "95.91.221.33",
"ERROR": "OK",
"ServerName": "Football-API",
"ServerAddress": "http://football-api.com/api"
};

// console.log(matchday.matches[1].match_id);