import { PageOptions } from "../base/Api";
import { Leaderboard } from "../base/Leaderboard";

export interface LeaderboardEndpointsFields {
	leaderboardPlayer: keyof Leaderboard;
}

export interface LeaderboardEndpointsFilter {
	period: string;
	player: number;
}

export interface LeaderboardListParameters {
	filter: LeaderboardEndpointsFilter;
	fields?: Partial<LeaderboardEndpointsFields>;
	page?: PageOptions;
}
