import { BanList } from "../base/BanList";

export interface BanListCreateParameters {
	data: Omit<
		BanList,
		"id" | "permCreate" | "permDelete" | "permManage" | "permUpdate"
	>;
}

export interface BanListAcceptInvite {
	data: Omit<
		BanList,
		"id" | "name" | "permCreate" | "permDelete" | "permManage" | "permUpdate"
	> & { code: string };
}

export interface BanListList {}

interface;

export interface BanListFields {
	banList: keyof BanList;
	// organization?: keyof;
	// owner: keyof;
	// server?: keyof;
}
