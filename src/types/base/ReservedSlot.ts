import { Relationship } from "./Api";

export interface ReservedSlotAttributes {
	createdAt: string;
	expires: string | null;
	identifiers: unknown[];
}

export interface ReservedSlotRelationships {
	organization: Relationship<"organization">;
	player: Relationship<"player">;
	servers?: Relationship<"server">[];
	user: Relationship<"user">;
}

export interface ReservedSlot {
	attributes: ReservedSlotAttributes;
	id: string;
	meta: unknown;
	relationships: ReservedSlotRelationships;
	type: "reservedSlot";
}
