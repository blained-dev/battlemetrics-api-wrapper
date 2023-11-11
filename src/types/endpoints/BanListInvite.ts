import {
	BanListInviteAttributes,
	BanListInviteRelationships,
} from "../base/BanListInvite";
import { PageOptions } from "../base/Api";
import { Relationship } from "../base/Relationship";

export interface BanListInviteCreateParameters {
	data: Partial<BanListInviteAttributes> &
		Pick<BanListInviteRelationships, "organization">;
}

type BanListInviteIncludeOptions = "organization" | "user" | "banList";

export interface BanListInviteFields {
	banList: keyof Relationship<"banList">;
	banListInvite: keyof BanListInviteAttributes;
	organization: keyof Relationship<"organization">;
	user: keyof Relationship<"user">;
}

export interface BanListInviteReadParamaters {
	fields?: Partial<BanListInviteFields>;
	include?: BanListInviteIncludeOptions;
}

export interface BanListInviteListInvitesParameters {
	fields?: Partial<BanListInviteFields>;
	include?: BanListInviteIncludeOptions;
	page?: PageOptions;
}
