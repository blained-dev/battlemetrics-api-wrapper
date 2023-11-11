import { Relationship } from "./Relationship";

export interface GameFeatureOptionAttributes {
	count: number;
	display: string;
	players: number;
	updatedAt: string;
}

export interface GameFeatureOptionRelationships {
	gameFeature: Relationship<"gameFeature">;
}

export interface GameFeatureOption {
	attributes: GameFeatureOptionAttributes;
	id: string;
	relationships: GameFeatureOptionRelationships;
	type: "gameFeatureOption";
}
