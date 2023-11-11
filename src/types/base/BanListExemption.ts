import { Relationship } from "./Relationship";

export interface BanListExemptionAttributes {
	reason: string;
}

export interface BanListExemptionRelationships {
	ban: Relationship<"ban">;
	organization: Relationship<"organization">;
}

export interface BanListExemption {
	attributes: BanListExemptionAttributes;
	id: string;
	relationships: BanListExemptionRelationships;
	type: "banExemption";
}
