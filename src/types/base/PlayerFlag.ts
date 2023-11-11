import { Relationship } from "./Api";

type PlayerFlagIconType =
	| "flag"
	| "alarm"
	| "attach_money"
	| "block"
	| "bookmark"
	| "check_circle_outline"
	| "emoji_objects"
	| "enhanced_encryption"
	| "error_outline"
	| "highlight_off"
	| "info"
	| "label"
	| "loyalty"
	| "monezation_on"
	| "note_add"
	| "notifications"
	| "notification_important"
	| "policy"
	| "verified_user"
	| "priority_high"
	| "remove_circle"
	| "report"
	| "star"
	| "thumb_down"
	| "thumb_up"
	| "visibility"
	| "warning"
	| "whatshot";

export interface PlayerFlagAttributes {
	color: string;
	createdAt: string;
	description: string | null;
	icon: PlayerFlagIconType | null;
	name: string;
	updatedAt: string;
}

export interface PlayerFlagRelationships {
	organization: Relationship<"organization">;
	user: Relationship<"user">;
}

export interface PlayerFlag {
	attributes: PlayerFlagAttributes;
	id: string;
	meta: { shared: boolean };
	relationships: PlayerFlagRelationships;
	type: "playerFlag";
}
