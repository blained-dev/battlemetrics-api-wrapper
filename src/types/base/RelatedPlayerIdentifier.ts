import { PlayerIdentifierType, Relationship } from "./Api";

export interface RelatedPlayerIdentifierAttributes {
	identifier: string;
	lastSeen: string;
	metadata: unknown;
	private: boolean;
	type: PlayerIdentifierType;
}

export interface RelatedPlayerIdentifierRelationships {
	organizations: Relationship<"organization">[];
	player: Relationship<"player">;
	relatedIdentifiers: Relationship<"identifier">[];
	relatedPlayers: Relationship<"player">[];
}

export interface RelatedPlayerIdentifier {
	attributes: RelatedPlayerIdentifierAttributes;
	id: string;
	meta: { commonIdentifier: boolean };
	relationships: RelatedPlayerIdentifierRelationships;
	type: "relatedIdentifier";
}
