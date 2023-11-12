import { PageOptions } from "../base/Api";
import {
	ReservedSlot,
	ReservedSlotAttributes,
	ReservedSlotRelationships,
} from "../base/ReservedSlot";

export interface ReservedSlotCreateParameters {
	data: Pick<ReservedSlot, "relationships" | "type"> & {
		attributes: Pick<ReservedSlotAttributes, "identifiers" | "expires">;
		meta?: unknown;
	};
}

export interface ReservedSlotDeleteParameters {}

interface ReservedSlotInfoFields {
	identifier: string;
	organization: string;
	player: string;
	reservedSlot: keyof ReservedSlot;
	server: string;
	user: string;
}

type ReservedSlotInfoIncludeOptions =
	| "organization"
	| "player"
	| "server"
	| "playerIdentifiers"
	| "user";

export interface ReservedSlotInfoParameters {
	fields?: Partial<ReservedSlotInfoFields>;
	include?: ReservedSlotInfoIncludeOptions;
}

interface ReservedSlotListFields {
	organization: string;
	player: string;
	reservedSlot: keyof ReservedSlot;
	server: string;
	user: string;
}

interface ReservedSlotListFilter {
	expired: "true" | "false";
	organization: string;
	player: string;
	search: string;
	server: string;
}

type ReservedSlotListIncludeOptions =
	| "server"
	| "player"
	| "organization"
	| "user";

type ReservedSlotListSortOptions =
	| "createdAt"
	| "expires"
	| "-createdAt"
	| "-expires";

export interface ReservedSlotListParameters {
	fields?: Partial<ReservedSlotListFields>;
	filter?: Partial<ReservedSlotListFilter>;
	include?: ReservedSlotListIncludeOptions;
	page?: PageOptions;
	sort?: ReservedSlotListSortOptions;
}

export interface ReservedSlotUpdateParameters {
	data: Pick<ReservedSlot, "id" | "type"> & {
		attributes?: Partial<
			Pick<ReservedSlotAttributes, "expires" | "identifiers">
		>;
		meta?: Pick<ReservedSlot, "meta">;
		relationships?: Partial<Pick<ReservedSlotRelationships, "servers">>;
	};
}
