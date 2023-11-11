import { BanList, BanListServerRelationshipData } from "../base/BanList";
import { PageOptions } from "../base/Api";
import { Relationship } from "../base/Relationship";

export interface BanListCreateParameters {
	data: Omit<
		BanList,
		"id" | "permCreate" | "permDelete" | "permManage" | "permUpdate"
	>;
}

export interface BanListSubscribe {
	data: Omit<
		BanList,
		"id" | "name" | "permCreate" | "permDelete" | "permManage" | "permUpdate"
	> & { code: string };
}

type BanListListIncludeOptions = "organization" | "owner" | "server";

export interface BanListList {
	fields?: Partial<BanListEndpointsFields>;
	include?: BanListListIncludeOptions;
	page?: PageOptions;
}

export interface BanListEndpointsFields {
	banList: keyof BanList;
	organization: keyof Relationship<"organization">;
	owner: keyof Relationship<"owner">;
	servers: keyof Relationship<"servers", BanListServerRelationshipData[]>;
}

export interface BanListOrganizationList {
	fields?: Partial<BanListEndpointsFields>;
	include?: BanListListIncludeOptions;
	page?: PageOptions;
}

export interface BanListReadOrganizationSubscriptions {
	fields?: Partial<BanListEndpointsFields>;
	include?: BanListListIncludeOptions;
}

export interface BanListRead {
	fields?: Partial<Pick<BanListEndpointsFields, "owner">>;
	include?: "owner";
}

export interface BanListUpdate {
	data: BanList;
}

export interface BanListUnsubscribe {}
