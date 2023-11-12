import axios from "axios";
import { BansEndpoints } from "../types/classes/endpoints/Bans";
import {
	BanCreateParameters,
	BanImportParameters,
	BanExportParameters,
	BanInfoParameters,
	BanListParameters,
	BanUpdateParameters,
} from "../types/endpoints/Ban";

export class Bans implements BansEndpoints {
	async create(parameters: BanCreateParameters): Promise<any> {
		return await axios.post("/bans", parameters);
	}
	async import(parameters: BanImportParameters): Promise<any> {
		return await axios.post("/bans/import", parameters);
	}
	async export(parameters: BanExportParameters): Promise<any> {
		return await axios.get("/bans/export", { params: parameters });
	}
	async delete(banId: string): Promise<any> {
		return await axios.delete(`/bans/${banId}`);
	}
	async info(banId: string, parameters?: BanInfoParameters): Promise<any> {
		return await axios.get(`/bans/${banId}`, { params: parameters });
	}
	async list(parameters?: BanListParameters): Promise<any> {
		return await axios.get(`/bans`, { params: parameters });
	}
	async update(banId: string, parameters: BanUpdateParameters): Promise<any> {
		return await axios.patch(`/bans/${banId}`, parameters);
	}
}
