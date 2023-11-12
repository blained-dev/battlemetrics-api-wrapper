import { PageOptions, Relationship } from "../base/Api";
import { NativeBanAttributes } from "../base/NativeBan";

type NativeBanIncludeOptions = "server" | "ban";

interface NativeBanEndpointsFilter {
	ban: string;
	server: string;
}

interface NativeBanEndpointsFields {
	ban: Relationship<"ban">;
	banNative: keyof NativeBanAttributes;
	server: Relationship<"server">;
	organization: Relationship<"organization">;
}

type NativeBanListSortOptions =
	| "createdAt"
	| "updatedAt"
	| "-createdAt"
	| "-updatedAt";

export interface NativeBanListParameters {
	fields?: Partial<NativeBanEndpointsFields>;
	filter?: Partial<NativeBanEndpointsFilter>;
	include?: NativeBanIncludeOptions;
	page?: PageOptions;
	sort?: NativeBanListSortOptions;
}

export interface NativeBanForceUpdateParameters {}
