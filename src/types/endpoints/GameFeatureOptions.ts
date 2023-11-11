import { PageOptions } from "../base/Api";

interface GameFeatureOptionsEndpointsFields {
	gameFeatureOption: string;
}

interface GameFeatureOptionsEndpointsFilter {
	count: string;
	players: string;
}

type GameFeatureOptionsSortOptions = "count" | "players";

export interface GameFeatureOptionsList {
	fields?: Partial<GameFeatureOptionsEndpointsFields>;
	filter?: Partial<GameFeatureOptionsEndpointsFilter>;
	page?: PageOptions;
	sort?: GameFeatureOptionsSortOptions;
}
