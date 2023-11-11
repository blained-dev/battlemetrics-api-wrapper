import { Relationship } from "./Api";

export interface OrganizationAttributes {
	active: boolean;
	banTemplate: string;
	consentGeoIpRequired: boolean;
	discoverable: boolean;
	discoverableRank: number | null;
	locale: string | null;
	mfaRequired: string | null;
	name: string;
	plan: string | null;
	tz: string | null;
}

export interface OrganizationRelationships {
	banLists: Relationship<"banList">[];
	defaultBanList?: Relationship<"banList">;
	games: Relationship<"game">[];
	owner: Relationship<"owner">;
	servers: Relationship<"server">[];
}

export interface Organization {
	attributes: OrganizationAttributes;
	id: string;
	relationships: OrganizationRelationships;
	type: string;
}
