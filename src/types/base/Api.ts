import { Relationship } from "./Relationship";

export interface PageOptions {
	key?: string;
	rel?: "next" | "prev";
	size?: number;
	offset?: string;
}

export type PlayerIdentifierType =
	| "steamID"
	| "BEGUID"
	| "legacyBEGUID"
	| "ip"
	| "name"
	| "survivorName"
	| "steamFamilyShareOwner"
	| "conanCharName"
	| "egsID"
	| "eosID"
	| "funcomID"
	| "playFabID"
	| "mcUUID"
	| "7dtdEOS"
	| "battlebitHWID";

export interface PlayerIdentifierAttributes {
	identifier: string;
	lastSeen: string;
	metadata: null | unknown;
	private: boolean;
	type: PlayerIdentifierType;
}

export interface PlayerIdentifierRelationships {
	organizations: Relationship<"organization">;
	player: Relationship<"player">;
}

export interface PlayerIdentifier {
	attributes: PlayerIdentifierAttributes;
	id: string;
	relationships: PlayerIdentifierRelationships;
	type: "identifier";
}

export interface OrganizationStatsAttributes {
	gameRanks: { [gameName: string]: number };
	identifiers: number;
	uniquePlayers: number;
}

export interface OrganizationStatsRelationships {
	organization: Relationship<"organization">;
}

export interface OrganizationStats {
	attributes: OrganizationStatsAttributes;
	id: string;
	relationships: OrganizationStatsRelationships;
	type: "organizationStats";
}
