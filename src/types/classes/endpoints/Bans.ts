import {
	BanCreateParameters,
	BanExportParameters,
	BanImportParameters,
	BanInfoParameters,
	BanListParameters,
	BanUpdateParameters,
} from "../../endpoints/Ban";

export interface BansEndpoints {
	create(ban: BanCreateParameters): Promise<any>;
	import(ban: BanImportParameters): Promise<any>;
	export(options: BanExportParameters): Promise<any>;
	delete(banId: string): Promise<any>;
	info(banId: string, options?: BanInfoParameters): Promise<any>;
	list(options?: BanListParameters): Promise<any>;
	update(banId: string, ban: BanUpdateParameters): Promise<any>;
}
