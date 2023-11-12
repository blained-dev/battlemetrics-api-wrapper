import {
	BanCreateParamaters,
	BanExportParameters,
	BanImportParameters,
	BanInfoParameters,
	BanListParameters,
	BanUpdateParameters,
} from "../../endpoints/Ban";

export interface BansEndpoints {
	create(ban: BanCreateParamaters): Promise<any>;
	import(ban: BanImportParameters): Promise<any>;
	export(options: BanExportParameters): Promise<any>;
	delete(banId: string): Promise<any>;
	info(options: BanInfoParameters): Promise<any>;
	list(options: BanListParameters): Promise<any>;
	update(ban: BanUpdateParameters): Promise<any>;
}
