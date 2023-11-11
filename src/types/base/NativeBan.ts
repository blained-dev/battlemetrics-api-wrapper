import { IdentifierType } from "./Api";
import { Relationship } from "./Relationship";

export interface NativeBanAttributes {
	createdAt: string;
	expires: string | null;
	identifier: string;
	reason: string | null;
	state: "added" | "remove";
	type: IdentifierType;
	updateAt: string;
	updatedAt: string;
}

export interface NativeBanRelationships {
	ban: Relationship<"ban">;
	organization: Relationship<"organization">;
	server: Relationship<"server">;
}

export interface NativeBan {
	attributes: NativeBanAttributes;
	id: string;
	relationships: NativeBanRelationships;
	type: "banNative";
}
