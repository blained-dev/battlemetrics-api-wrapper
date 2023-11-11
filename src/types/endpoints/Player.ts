import { PageOptions, PlayerIdentifierType, Relationship } from "../base/Api";

interface PlayerListFields {
	flagPlayer: Relationship<"flagPlayer">;
	identifier: Relationship<"identifier">;
	player: Relationship<"player">;
	playerFlag: Relationship<"playerFlag">;
	server: Relationship<"server">;
}

interface PlayerListServerFilter {
	countries: string[];
	game: string;
	maxDistance: number;
	players: { max: number; min: number };
	search: string;
	status: "online" | "offline" | "dead" | "invalid";
}

interface PlayerListFilter {
	after: string;
	before: string;
	firstSeen: string;
	identifiers: PlayerIdentifierType;
	lastSeen: string;
	online: boolean;
	organization: string;
	organizations: string;
	playerFlags: string;
	public: string;
	search: string;
	server: PlayerListServerFilter;
	servers: string;
	sessions: { at: string };
}

type PlayerListIncludeOptions = "server" | "identifier";

type PlayerListSortOptions =
	| "createdAt"
	| "updatedAt"
	| "name"
	| "firstSeen"
	| "lastSeen"
	| "-createdAt"
	| "-updatedAt"
	| "-name"
	| "-firstSeen"
	| "-lastSeen";

export interface PlayerListParameters {
	filter?: Partial<PlayerListFilter>;
	fields?: Partial<PlayerListFields>;
	include?: PlayerListIncludeOptions;
	page?: PageOptions;
	sort?: PlayerListSortOptions;
}

interface PlayerInfoFields {
	flagPlayer: Relationship<"flagPlayer">;
	identifier: Relationship<"identifier">;
	player: Relationship<"player">;
	playerFlag: Relationship<"playerFlag">;
	server: Relationship<"server">;
}

type PlayerInfoIncludeOptions =
	| "server"
	| "identifier"
	| "playerNote"
	| "playerCounter"
	| "playerFlag"
	| "flagPlayer";

interface PlayerInfoFilter {
	identifiers: string;
	servers: string;
}

interface PlayerInfoRelations {
	flagPlayer: string;
	identifier: string;
	player: string;
	playerFlag: string;
	server: string;
}

export interface PlayerInfoParameters {
	fields?: Partial<PlayerInfoFields>;
	filter?: Partial<PlayerInfoFilter>;
	include?: PlayerInfoIncludeOptions;
	relations?: Partial<PlayerInfoRelations>;
}

export interface PlayerTimePlayedHistoryParameters {
	start: string;
	stop: string;
}

export interface PlayerServerInformationParameters {}

export interface PlayerMatchIdentifiersParameters {
	data: {
		attributes: { identifier: string; type: PlayerIdentifierType };
		type: "identifier";
	}[];
}

export interface PlayerQuickMatchIdentifiersParameters {
	data: {
		attributes: { identifier: string; type: PlayerIdentifierType };
		type: "identifier";
	}[];
}

interface PlayerSessionHistoryFields {
	identifier: string;
	server: string;
	session: string;
}

interface PlayerSessionHistoryFilter {
	organizations: string;
	servers: string;
}

type PlayerSessionIncludeOptions = "server" | "identifier";

export interface PlayerSessionHistoryParameters {
	fields?: Partial<PlayerSessionHistoryFields>;
	filter?: Partial<PlayerSessionHistoryFilter>;
	include?: PlayerSessionIncludeOptions;
	page?: PageOptions;
}
