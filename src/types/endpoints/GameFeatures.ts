import { PageOptions } from "../base/Api";

interface GameFeaturesEndpointsFields {
	gameFeature: string;
}

interface GameFeaturesEndpointsFilter {
	game: string;
}

export interface GameFeaturesListParameters {
	fields?: Partial<GameFeaturesEndpointsFields>;
	filter?: Partial<GameFeaturesEndpointsFilter>;
	page?: PageOptions;
}
