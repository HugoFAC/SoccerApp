const leagues = [
	{
		id: "portugueseLeague1",
		name:"Liga NOS",
		clubs:["scp","slb","fcp","scb","bfc"]
	},
	{
		id: "englishLeague1",
		name:"Premier League",
		clubs:["mutd","mcity","liv","che","ars"]
	},
	{
		id: "spanishLeague1",
		name:"Liga Santander",
		clubs:["rmad","bar","atlm","val","sev"]
	}
];

const players = [
	{
		id: 1,
		name: "António Adan",
		age: 35,
		position: "Goalkeeper",
		nationality: "Spain",
	},
	{
		id: 2,
		name: "Sebastián Coates",
		age: 31,
		position: "Defender",
		nationality: "Uruguay"
	},
	{
		id: 3,
		name: "Pedro Gonçalves",
		age: 24,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 4,
		name: "Manuel Ugarte",
		age: 21,
		position: "Midfielder",
		nationality: "Uruguay"
	},
	{
		id: 5,
		name: "Marcus Edwards",
		age: 23,
		position: "Striker",
		nationality: "England"
	},
	{
		id: 6,
		name: "Odysseas Vlachodimos",
		age: 28,
		position: "Goalkeeper",
		nationality: "Greece"
	},
	{
		id: 7,
		name: "Nicolás Otamendi",
		age: 34,
		position: "Defender",
		nationality: "Argentina"
	},
	{
		id: 8,
		name: "João Mário",
		age: 29,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 9,
		name: "Enzo Fernández",
		age: 21,
		position: "Midfielder",
		nationality: "Argentina"
	},
	{
		id: 10,
		name: "David Neres",
		age: 25,
		position: "Striker",
		nationality: "Brasil"
	},
	{
		id: 11,
		name: "Diogo Costa",
		age: 23,
		position: "Goalkeeper",
		nationality: "Portugal"
	},
	{
		id: 12,
		name: "Pepe",
		age: 39,
		position: "Defender",
		nationality: "Portugal"
	},
	{
		id: 13,
		name: "Otávio",
		age: 27,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 14,
		name: "Evanilson",
		age: 22,
		position: "Striker",
		nationality: "Brasil"
	},
	{
		id: 15,
		name: "Mehdi Taremi",
		age: 30,
		position: "Striker",
		nationality: "Iran"
	},
	{
		id: 16,
		name: "Matheus Magalhães",
		age: 30,
		position: "Goalkeeper",
		nationality: "Brasil"
	},
	{
		id: 17,
		name: "Nuno Sequeira",
		age: 32,
		position: "Defender",
		nationality: "Portugal"
	},
	{
		id: 18,
		name: "André Horta",
		age: 25,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 19,
		name: "Abel Ruiz",
		age: 22,
		position: "Striker",
		nationality: "Spain"
	},
	{
		id: 20,
		name: "Ricardo Horta",
		age: 28,
		position: "Striker",
		nationality: "Portugal"
	},
	{
		id: 21,
		name: "Rafael Bracali",
		age: 41,
		position: "Goalkeeper",
		nationality: "Brasil"
	},
	{
		id: 22,
		name: "Vincent Sasso",
		age: 31,
		position: "Defender",
		nationality: "France"
	},
	{
		id: 23,
		name: "Miguel Reisinho",
		age: 23,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 24,
		name: "Sebastián Perez",
		age: 29,
		position: "Midfielder",
		nationality: "Colombia"
	},
	{
		id: 25,
		name: "Salvador Agra",
		age: 30,
		position: "Striker",
		nationality: "Portugal"
	},
	{
		id: 26,
		name: "David de Gea",
		age: 31,
		position: "Goalkeeper",
		nationality: "Spain"
	},
	{
		id: 27,
		name: "Harry Maguire",
		age: 29,
		position: "Defender",
		nationality: "England"
	},
	{
		id: 28,
		name: "Bruno Fernandes",
		age: 28,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 29,
		name: "Cristiano Ronaldo",
		age: 37,
		position: "Striker",
		nationality: "Portugal"
	},
	{
		id: 30,
		name: "Marcus Rashford",
		age: 24,
		position: "Striker",
		nationality: "England"
	},
	{
		id: 31,
		name: "Ederson Moraes",
		age: 29,
		position: "Goalkeeper",
		nationality: "Brasil"
	},
	{
		id: 32,
		name: "Rúben Dias",
		age: 25,
		position: "Defender",
		nationality: "Portugal"
	},
	{
		id: 33,
		name: "João Cancelo",
		age: 28,
		position: "Defender",
		nationality: "Portugal"
	},
	{
		id: 34,
		name: "Bernardo Silva",
		age: 28,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 35,
		name: "Erling Haaland",
		age: 22,
		position: "Striker",
		nationality: "Norway"
	},
	{
		id: 36,
		name: "Alisson Becker",
		age: 29,
		position: "Goalkeeper",
		nationality: "Brasil"
	},
	{
		id: 37,
		name: "Virgil van Dijk",
		age: 31,
		position: "Defender",
		nationality: "Netherlands"
	},
	{
		id: 38,
		name: "Fabinho",
		age: 28,
		position: "Midfielder",
		nationality:"Brasil"
	},
	{
		id: 39,
		name: "Mohamed Salah",
		age: 30,
		position: "Striker",
		nationality: "Egypt"
	},
	{
		id: 40,
		name: "Diogo Jota",
		age: 25,
		position: "Striker",
		nationality: "Portugal"
	},
	{
		id: 41,
		name: "Édouard Mendy",
		age: 30,
		position: "Goalkeeper",
		nationality: "Senegal"
	},
	{
		id: 42,
		name: "Thiago Silva",
		age: 37,
		position: "Defender",
		nationality: "Brasil"
	},
	{
		id: 43,
		name: "Jorginho",
		age: 30,
		position: "Midfielder",
		nationality: "Italy"
	},
	{
		id: 44,
		name: "Kai Havertz",
		age: 23,
		position: "Midfielder",
		nationality: "Germany"
	},
	{
		id: 45,
		name: "Raheem Sterling",
		age: 27,
		position: "Striker",
		nationality: "England"
	},
	{
		id: 46,
		name: "Aaron Ramsdale",
		age: 24,
		position: "Goalkeeper",
		nationality: "England"
	},
	{
		id: 47,
		name: "Cédric Soares",
		age: 31,
		position: "Defender",
		nationality: "Portugal"
	},
	{
		id: 48,
		name: "Martin Odegaard",
		age: 23,
		position: "Midfielder",
		nationality: "Norway"
	},
	{
		id: 49,
		name: "Bukayop Saka",
		age: 21,
		position: "Striker",
		nationality: "England"
	},
	{
		id: 50,
		name: "Eddie Nketiah",
		age: 23,
		position: "Striker",
		nationality: "England"
	},
	{
		id: 51,
		name: "Thibaut Courtois",
		age: 30,
		position: "Goalkeeper",
		nationality: "Belgium"
	},
	{
		id: 52,
		name: "David Alaba",
		age: 30,
		position: "Defender",
		nationality: "Austria"
	},
	{
		id: 53,
		name: "Toni Kroos",
		age: 32,
		position: "Midfielder",
		nationality: "Germany"
	},
	{
		id: 54,
		name: "Fede Valverde",
		age: 24,
		position: "Midfielder",
		nationality: "Uruguay"
	},
	{
		id: 55,
		name: "Vinícius Júnior",
		age: 22,
		position: "Striker",
		nationality: "Brasil"
	},
	{
		id: 56,
		name: "Ter Stegen",
		age: 30,
		position: "Goalkeeper",
		nationality: "Germany"
	},
	{
		id: 57,
		name: "Gerard Piqué",
		age: 35,
		position: "Defender",
		nationality: "Spain"
	},
	{
		id: 58,
		name: "Jordi Alba",
		age: 33,
		position: "Defender",
		nationality: "Spain"
	},
	{
		id: 59,
		name: "Sergio Busquets",
		age: 34,
		position: "Midfielder",
		nationality: "Spain"
	},
	{
		id: 60,
		name: "Robert Lewandowski",
		age: 34,
		position: "Striker",
		nationality: "Poland"
	},
	{
		id: 61,
		name: "Jan Oblak",
		age: 29,
		position: "Goalkeeper",
		nationality: "Slovenia"
	},
	{
		id: 62,
		name: "José Giménez",
		age: 27,
		position: "Defender",
		nationality: "Uruguay"
	},
	{
		id: 63,
		name: "Axel Witsel",
		age: 33,
		position: "Midfielder",
		nationality: "Belgium"
	},
	{
		id: 64,
		name: "João Félix",
		age: 22,
		position: "Striker",
		nationality: "Portugal"
	},
	{
		id: 65,
		name: "Antoine Griezmann",
		age: 31,
		position: "Striker",
		nationality : "France"
	},
	{
		id: 66,
		name: "Jaume Doménech",
		age: 31,
		position: "Goalkeeper",
		nationality: "Spain"
	},
	{
		id: 67,
		name: "Gabriel Paulista",
		age: 31,
		position: "Defender",
		nationality: "Brasil"
	},
	{
		id: 68,
		name: "André Almeida",
		age: 22,
		position: "Midfielder",
		nationality: "Portugal"
	},
	{
		id: 69,
		name: "Edinson Cavani",
		age: 35,
		position: "Striker",
		nationality: "Uruguay"
	},
	{
		id: 70,
		name: "Marcos André",
		age: 25,
		position: "Striker",
		nationality: "Brasil"
	},
	{
		id: 71,
		name: "Marko Dmitrovic",
		age: 30,
		position: "Goalkeeper",
		nationality: "Serbia"
	},
	{
		id: 72,
		name: "Jesús Navas",
		age: 36,
		position: "Defender",
		nationality: "Spain"
	},
	{
		id: 73,
		name: "Isco",
		age: 30,
		position: "Midfielder",
		nationality: "Spain"
	},
	{
		id: 74,
		name: "Ivan Rakitic",
		age: 34,
		position: "Midfielder",
		nationality: "Croatia"
	},
	{
		id: 75,
		name: "Erik Lamela",
		age: 30,
		position: "Striker",
		nationality: "Argentina"
	}
];

const games = [
	{
		id: 1,
		league: "portugueseLeague1",
		club1: "scp",
		club2: "slb",
		date: "3/9/2022",
		result: [1,0]
	},
	{
		id: 2,
		league: "portugueseLeague1",
		club1: "fcp",
		club2: "scb",
		date: "3/9/2022",
		result: [2,0]
	},
	{
		id: 3,
		league: "englishLeague1",
		club1: "ars",
		club2: "mutd",
		date: "3/9/2022",
		result: [1,2]
	},
	{
		id: 4,
		league: "englishLeague1",
		club1: "che",
		club2: "liv",
		date: "4/9/2022",
		result: [1,1]
	},
	{
		id: 5,
		league: "spanishLeague1",
		club1: "rmad",
		club2: "val",
		date: "4/9/2022",
		result: [3,2]
	},
	{
		id: 6,
		league: "spanishLeague1",
		club1: "sev",
		club2: "bar",
		date: "4/9/2022",
		result: [2,0]
	},
	{
		id: 7,
		league: "englishLeague1",
		club1: "mcity",
		club2: "mutd",
		date: "10/9/2022",
		result: [3,0]
	},
	{
		id: 8,
		league: "portugueseLeague1",
		club1: "bfc",
		club2: "slb",
		date: "10/9/2022",
		result: [1,3]
	},
	{
		id: 9,
		league: "englishLeague1",
		club1: "liv",
		club2: "ars",
		date: "11/09/2022",
		result: [1,0]
	},
	{
		id: 10,
		league: "portugueseLeague1",
		club1: "scp",
		club2: "scb",
		date: "11/9/2022",
		result: [1,1]
	},
	{
		id: 11,
		league: "spanishLeague",
		club1: "atlm",
		club2: "bar",
		date: "11/9/2022",
		result: [1,0]
	},
	{
		id: 12,
		league: "portugueseLeague1",
		club1: "rmad",
		club2: "sev",
		date: "12/9/2022",
		result: [2,2]
	},
	{
		id: 13,
		league: "portugueseLeague1",
		club1: "fcp",
		club2: "bfc",
		date: "28/9/2022",
		result: [-1,-1]
	},
	{
		id: 14,
		league: "englishLeague1",
		club1: "liv",
		club2: "mcity",
		date: "28/9/2022",
		result: [-1,-1]
	},
	{
		id: 15,
		league: "englishLeague",
		club1: "che",
		club2: "ars",
		date: "28/9/2022",
		result: [-1,-1]
	},
	{
		id: 16,
		league: "spanishLeague1",
		club1: "bar",
		club2: "rmad",
		date: "28/9/2022",
		result: [-1,-1]
	},
	{
		id: 17,
		league: "spanishLeague1",
		club1: "atlm",
		club2: "val",
		date: "29/9/2022",
		result: [-1,-1]
	},
	{
		id: 18,
		league: "portugueseLeague1",
		club1: "scb",
		club2: "slb",
		date: "30/9/2022",
		result: [-1,-1]
	}
]

const clubs = {
	
	"scp":{
		name: "Sporting Clube de Portugal",
		players: [1,2,3,4,5]
	},
	"slb":{
		name: "Sport Lisboa e Benfica",
		players: [6,7,8,9,10]
	},
	"fcp":{
		name: "Futebol Clube do Porto",
		players: [11,12,13,14,15]
	},
	"scb":{
		name: "Sporting Clube de Braga",
		players: [16,17,18,19,20]
	},
	"bfc":{
		name: "Boavista Futebol Clube",
		players: [21,22,23,24,25]
	},
	"mutd":{
		name: "Manchester United",
		players: [26,27,28,29,30]
	},
	"mcity":{
		name: "Manchester City",
		players: [31,32,33,34,35]
	},
	"liv":{
		name: "Liverpool",
		players: [36,37,38,39,40]
	},
	"che":{
		name: "Chelsea",
		players: [41,42,43,44,45]
	},
	"ars":{
		name: "Arsenal",
		players: [46,47,48,49,50]
	},
	"rmad":{
		name: "Real Madrid",
		players: [51,52,53,54,55]
	},
	"bar":{
		name: "Barcelona",
		players: [56,57,58,59,60]
	},
	"atlm":{
		name: "Atletico de Madrid",
		players: [61,62,63,64,65]
	},
	"val":{
		name: "Valencia",
		players: [66,67,68,69,70]
	},
	"sev":{
		name: "Sevilla",
		players: [71,72,73,74,75]
	}
};

const users = {
	14157860:{
		username: "Koala",
		password: "pass123"
	},
	12345678:{
		username: "Lemur",
		password: "password"
	}
}

export function getUser(usr, pass){
	let user = Object.entries(users).filter(u => u[1].username == usr);
	if(user.length == 0) 
		return "No such username: " + usr;
	if(user[0][1].password == pass)
		return user[0][1].username;
	return "Wrong password";
}

export function getLeagues() {
	return leagues;
}

export function getLeaguesByName(leagueName){
	let lName = leagueName ? leagueName.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
	return leagues.filter(
		league => league.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(lName.toLowerCase())
	);
}

export function getLeague(leagueId) {
	return leagues.find(
		(league) => league.id === leagueId
	);
}

export function getClubs() {
	return clubs;
}

export function getClubsByName(clubName) {
	let cName = clubName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return Object.entries(clubs).filter(
		club => club[1].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(cName.toLowerCase())
	);
}

export function getClub(clubId) {
	return clubs[clubId];
}

export function getPlayers() {
	return players;
}

export function getPlayersByName(playerName){
	let pName = playerName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
	return players.filter(
		player => player.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(pName.toLowerCase())
	);
}
export function getPlayer(playerId) {
	return players.find(
		(player) => player.id === playerId
	);
}

export function getGames() {
	return games;
}

export function getGame(gameId){
	return games.find(
		(game) => game.id === gameId
	);
}

export function getClubCalendar(clubId){
	return games.filter(
		game=>(game.club1 === clubId || game.club2 === clubId)
	).map((game) => {return game});
}

export function getGamesOfClub(clubName){
	let filter = "";
	clubName && (filter = clubName);
	return games.filter(game => (
		clubs[game.club1].name.toLowerCase().includes(filter.toLowerCase()) || 
		clubs[game.club2].name.toLowerCase().includes(filter.toLowerCase()))
	).map((game) => {return game});
}

export function getUnplayedGames(clubName){
	let filter = "";
	clubName && (filter = clubName);
	return games.filter(game => (
		(clubs[game.club1].name.toLowerCase().includes(filter.toLowerCase()) || 
		clubs[game.club2].name.toLowerCase().includes(filter.toLowerCase())) && 
		game.result[0]<0
		)
	).map((game) => {return game});
}

export function getGamesOnDay(day){
	const dateArray = day.split("/");
	return games.filter(
		game=>game.date == day
	).map((game) => {return game});
}
