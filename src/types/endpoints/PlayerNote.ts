import { PageOptions, Relationship } from "../base/Api";
import {
	PlayerNote,
	PlayerNoteAttributes,
	PlayerNoteRelationships,
} from "../base/PlayerNote";

export interface PlayerNoteCreateParamaters {
	data: Pick<PlayerNote, "type"> & {
		attributes: Pick<PlayerNoteAttributes, "note" | "shared">;
		relationships?: Partial<
			PlayerNoteRelationships & { trigger: Relationship<"trigger"> }
		>;
	};
}

export interface PlayerNoteDeleteParameters {}

export interface PlayerNoteInfoParameters {}

interface PlayerNoteListFilter {
	personal: boolean;
}

type PlayerNoteListIncludeOptions = "user" | "organization";

export interface PlayerNoteListParameters {
	filter?: Partial<PlayerNoteListFilter>;
	include?: PlayerNoteListIncludeOptions;
	page?: PageOptions;
}

export interface PlayerNoteUpdateParameters {
	data: Pick<PlayerNote, "type" | "id"> & {
		attributes: Pick<PlayerNoteAttributes, "note" | "shared">;
	};
}
