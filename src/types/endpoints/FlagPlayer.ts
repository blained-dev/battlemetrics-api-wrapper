import { PageOptions } from "../base/Api";
import { BasicRelationshipData } from "../base/Relationship";

export interface FlagPlayerCreate {
	data: BasicRelationshipData<"playerFlag">[];
}

type FlagPlayerIncludeOptions = "playerFlag" | "organization";

export interface FlagPlayerFlagsParameters {
	include?: FlagPlayerIncludeOptions;
	page?: PageOptions;
}

export interface FlagPlayerDeleteParams {}
