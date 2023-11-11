export interface PageOptions {
	key?: string;
	rel?: "next" | "prev";
	size?: number;
	offset?: string;
}

export type IdentifierType =
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
