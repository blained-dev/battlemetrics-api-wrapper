import { PageOptions, PlayerIdentifierType } from "../base/Api";

interface RelatedPlayerIdentifierInfoFields {
	flagPlayer: string;
	identifier: string;
	player: string;
	playerFlag: string;
}

interface RelatedPlayerIdentifierInfoFilter {
	identifiers: PlayerIdentifierType;
	matchIdentifiers: PlayerIdentifierType;
}

type RelatedPlayerIdentifierInfoIncludeOptions =
	| "player"
	| "identifier"
	| "playerFlag"
	| "flagPlayer";

interface RelatedPlayerIdentifierInfoRelations {
	flagPlayer: string;
	identifier: string;
	player: string;
	playerFlag: string;
}

export interface RelatedPlayerIdentifierInfoParameters {
	fields?: Partial<RelatedPlayerIdentifierInfoFields>;
	filter?: Partial<RelatedPlayerIdentifierInfoFilter>;
	include?: RelatedPlayerIdentifierInfoIncludeOptions;
	page?: PageOptions;
	relations?: Partial<RelatedPlayerIdentifierInfoRelations>;
}
