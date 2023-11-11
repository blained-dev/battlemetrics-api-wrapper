import { PageOptions, Relationship } from "../base/Api";
import {
	OrganizationFriend,
	OrganizationFriendAttributes,
	OrganizationFriendRelationships,
} from "../base/OrganizationFriend";

export interface OrganizationFriendEndpointsFields {
	organization: Relationship<"organization">;
	organizationFriend: keyof OrganizationFriend;
	playerFlag: Relationship<"playerFlag">;
}

type OrganizationFriendIncludeOptions =
	| "organization"
	| "playerFlag"
	| "organizationStats";

type OrganizationFriendSortOptions = "rank" | "name" | "-rank" | "-name";

export interface OrganizationFriendEndpointsFilter {
	accepted: boolean;
	name: string;
	origin: boolean;
	reciprocated: boolean;
}

export interface OrganizationFriendListParameters {
	fields?: Partial<Omit<OrganizationFriendEndpointsFields, "playerFlag">>;
	filter?: Partial<OrganizationFriendEndpointsFilter>;
	include?: OrganizationFriendIncludeOptions;
	page?: PageOptions;
	sort?: OrganizationFriendSortOptions;
}

export interface OrganizationFriendOrganizationFriendParameters {
	fields?: Partial<OrganizationFriendEndpointsFields>;
	include?: OrganizationFriendIncludeOptions;
}

export interface OrganizationFriendUpdateSettingsParameters {
	data: Omit<OrganizationFriend, "relationships" | "attributes"> & {
		attributes: Omit<OrganizationFriendAttributes, "reciprocated">;
		relationships: Omit<
			OrganizationFriendRelationships,
			"friend" | "organization"
		>;
	};
}

export interface OrganizationFriendBulkUpdateSettingsParamaters {
	data: (Omit<OrganizationFriend, "relationships" | "attributes"> & {
		attributes: Omit<OrganizationFriendAttributes, "reciprocated">;
		relationships: Omit<
			OrganizationFriendRelationships,
			"friend" | "organization"
		>;
	})[];
}

export interface OrganizationFriendCreateParameters {
	data: Omit<OrganizationFriend, "relationships" | "attributes" | "id"> & {
		attributes: Omit<OrganizationFriendAttributes, "reciprocated" | "accepted">;
		relationships: Omit<
			OrganizationFriendRelationships,
			"friend" | "organization"
		>;
	};
}

export interface OrganizationFriendDeleteParamters {}

export interface OrganizationFriendBulkDeleteParamters {
	data: Relationship<"organizationFriend">[];
}
