import { Ban, BanAttributes, BanRelationships } from "../base/Ban";
import { PageOptions } from "../base/Endpoint";
import { Relationship } from "../base/Relationship";

interface BanCreateParamaterRelationships extends BanRelationships {
	trigger: Relationship<"trigger">;
}

export interface BanCreateParamaters {
	data: Omit<Ban, "relationships"> & {
		relationships: BanCreateParamaterRelationships;
	};
}

interface BanImportParamaterRelationships
	extends Omit<BanRelationships, "user"> {}

export interface BanImportParameters {
	data: (Omit<Ban, "relationships"> & {
		relationships: BanImportParamaterRelationships;
	})[];
}

type BanExportFormat =
	| "arma2/bans.txt"
	| "arma3/bans.txt"
	| "squad/Bans.cfg"
	| "ark/banlist.txt"
	| "rust/bans.cfg"
	| "rust/bansip_SERVER.ini";

export interface BanExportParameters {
	format: BanExportFormat;
	filter?: Pick<BanEndpointFilters, "organization" | "server">;
}

type BanInfoIncludeOptions =
	| "organization"
	| "player"
	| "playerIdentifiers"
	| "server"
	| "user"
	| "banList"
	| "banExemption";

interface BanEndpointFilters {
	banList?: string;
	exempt?: string;
	expired?: "true" | "false";
	organization?: string;
	player?: string;
	search?: string;
	server?: string;
	users?: string;
}

interface BanEndpointFields {
	ban?: keyof BanAttributes;
	// banExemption?: keyof;
	// banList?: keyof;
	// identifier?: keyof;
	// organization?: keyof;
	// player?: keyof;
	// server?: keyof;
	// user?: keyof;
}

export interface BanInfoParameters {
	fields?: BanEndpointFields;
	include?: BanInfoIncludeOptions;
}

type BanListIncludeOptions = "server" | "player";
type BanListSortOptions =
	| "timestamp"
	| "expires"
	| "player"
	| "reason"
	| "-timestamp"
	| "-expires"
	| "-player"
	| "-reason";

export interface BanListParameters {
	fields?: Omit<BanEndpointFields, "identifier">;
	filter?: BanEndpointFilters;
	include?: BanListIncludeOptions;
	page?: PageOptions;
	sort?: BanListSortOptions;
}

export interface BanUpdateParameters {
	data: Partial<
		Omit<Ban, "attributes" | "meta"> & {
			attributes: Omit<BanAttributes, "id" | "timestamp" | "uid">;
		}
	>;
}
