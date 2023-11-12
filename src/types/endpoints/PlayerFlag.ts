import { PageOptions } from "../base/Api";
import { PlayerFlag, PlayerFlagAttributes } from "../base/PlayerFlag";

export interface PlayerFlagCreateParameters {
	data: Pick<PlayerFlag, "type"> & {
		relationships?: Partial<Pick<PlayerFlag, "relationships">>;
		attributes: Pick<
			PlayerFlagAttributes,
			"color" | "description" | "icon" | "name"
		>;
	};
}

export interface PlayerFlagDeleteParameters {}

export interface PlayerFlagInfoParameters {}

interface PlayerFlagListFilter {
	personal: boolean;
}

type PlayerFlagListIncludeOptions = "organization";

export interface PlayerFlagList {
	filter?: Partial<PlayerFlagListFilter>;
	include?: PlayerFlagListIncludeOptions;
	page?: PageOptions;
}

export interface PlayerFlagUpdate {
	data: Pick<PlayerFlag, "type" | "id"> & {
		attributes: Pick<
			PlayerFlagAttributes,
			"color" | "description" | "icon" | "name"
		>;
	};
}
