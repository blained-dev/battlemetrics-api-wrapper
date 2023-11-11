import {
	BanListExemption,
	BanListExemptionAttributes,
	BanListExemptionRelationships,
} from "../base/BanListExemption";

export interface BanListExemptionCreateParameters {
	data: Omit<BanListExemption, "relationships" | "attributes"> & {
		relationships: Pick<BanListExemptionRelationships, "organization">;
		attributes?: { reason?: string };
	};
}

export interface BanListExemptionReadParameters {}

interface BanListExemptionEndpointFields {
	banExemption: keyof BanListExemptionAttributes;
}

export interface BanListExemptionListExemptionsParameters {
	fields?: Partial<BanListExemptionEndpointFields>;
}

export interface BanListExemptionUpdate {
	data: BanListExemption;
}
