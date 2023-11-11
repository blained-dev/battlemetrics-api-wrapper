export interface GameAttributes {
	maxPlayers24H: number;
	maxPlayers30D: number;
	maxPlayers7D: number;
	metadata: {
		appid: string;
		gamedir: string;
		noPlayerList: boolean;
		minPlayers24H: number;
		minPlayers30D: number;
		minPlayers7D: number;
		name: string;
		players: number;
		playersByCountry: { [countryCode: string]: number };
		servers: number;
		serversByCountry: { [countryCode: string]: number };
	};
}

export interface Game {
	attributes: GameAttributes;
	id: string;
	type: "game";
}
