import { Relationship } from "./Api";

export interface PlayerNoteAttributes {
	createdAt: string;
	note: string;
	shared: boolean;
}

export interface PlayerNoteRelationships {
	organization: Relationship<"organization">;
	player: Relationship<"player">;
	user: Relationship<"user">;
}

export interface PlayerNote {
	attributes: PlayerNoteAttributes;
	id: string;
	relationships: PlayerNoteRelationships;
	type: "playerNote";
}
