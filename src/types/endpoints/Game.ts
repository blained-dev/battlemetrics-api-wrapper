import { PageOptions } from "../base/Api";

interface GameEndpointsFields {
	game: string;
}

export interface GameListParameters {
	fields?: Partial<GameEndpointsFields>;
	page?: PageOptions;
}

export interface GameInfoParameters {
	fields?: Partial<GameEndpointsFields>;
}
