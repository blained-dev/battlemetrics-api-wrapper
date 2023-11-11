import { Relationship } from "./Relationship";

export interface GameFeatureAttributes {
	display: string;
	featureType: "select" | "boolean" | "range";
	typeOptions: string;
}

export interface GameFeatureRelationships {
	game: Relationship<"game">;
}

export interface GameFeature {
	attributes: GameFeatureAttributes;
	id: string;
	relationship: GameFeatureRelationships;
	type: "gameFeature";
}
