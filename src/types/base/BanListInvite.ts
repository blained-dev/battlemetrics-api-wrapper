import { Relationship } from "./Relationship";

export interface BanListInviteAttributes {
	limit: number | null;
	permCreate: boolean;
	permDelete: boolean;
	permManage: boolean;
	permUpdate: boolean;
	uses: number;
}

export interface BanListInviteRelationships {
	banList: Relationship<"banList">;
	organization: Relationship<"organization">;
	user: Relationship<"user">;
	type: "banListInvite";
}

export interface BanListInvite {
	attributes: BanListInviteAttributes;
	id: string;
	relationships: BanListInviteRelationships;
	type: "banListInvite";
}
