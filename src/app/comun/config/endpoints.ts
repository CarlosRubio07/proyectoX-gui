import { environment } from "src/environments/environment";

export const API = {
  seguridad: {
    oauth: environment.apiSeguridad + '/v1/oauth/token',
  }

};
