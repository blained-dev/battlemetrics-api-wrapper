import { Ban, BanAttributes, BanRelationships } from "../base/Ban";
import { PageOptions } from "../base/Api";
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
	filter?: Partial<Pick<BanEndpointsFilter, "organization" | "server">>;
}

type BanInfoIncludeOptions =
	| "organization"
	| "player"
	| "playerIdentifiers"
	| "server"
	| "user"
	| "banList"
	| "banExemption";

interface BanEndpointsFilter {
	banList: string;
	exempt: string;
	expired: "true" | "false";
	organization: string;
	player: string;
	search: string;
	server: string;
	users: string;
}

interface BanEndpointsFields {
	ban: keyof BanAttributes;
	banExemption: keyof Relationship<"banExemption">;
	banList: keyof Relationship<"banList">;
	// identifier: keyof Relationship<"identifier">;
	organization: keyof Relationship<"organization">;
	player: keyof Relationship<"player">;
	server: keyof Relationship<"server">;
	user: keyof Relationship<"user">;
}

export interface BanInfoParameters {
	fields?: Partial<BanEndpointsFields>;
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
	fields?: Partial<Omit<BanEndpointsFields, "identifier">>;
	filter?: Partial<BanEndpointsFilter>;
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
