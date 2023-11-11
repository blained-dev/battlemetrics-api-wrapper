export interface LeaderboardAttributes {
	name: string;
	rank: number;
	value: number;
}

export interface Leaderboard {
	attributes: LeaderboardAttributes;
	id: string;
	type: "leaderboardPlayer";
}
