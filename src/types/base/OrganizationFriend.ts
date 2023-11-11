import { PlayerIdentifier } from "./Api";
import { Relationship } from "./Relationship";

export interface OrganizationFriendAttributes {
	accepted: boolean;
	identifiers: PlayerIdentifier[];
	notes: boolean;
	reciprocated: boolean;
}

export interface OrganizationFriendRelationships {
	flagsShared: Relationship<"playerFlag">[];
	flagsUsed: Relationship<"playerFlag">[];
	friend: Relationship<"organization">;
	organization: Relationship<"organization">;
}

export interface OrganizationFriend {
	attributes: OrganizationFriendAttributes;
	id: string;
	relationships: OrganizationFriendRelationships;
	type: "organizationFriend";
}
