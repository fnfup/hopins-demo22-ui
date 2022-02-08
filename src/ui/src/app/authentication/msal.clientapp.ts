import { BrowserCacheLocation, PublicClientApplication } from "@azure/msal-browser";
import { environment } from "../../environments/environment";

export function msalSPAClientApp() {
    return new PublicClientApplication(
        { // MSAL Configuration
            auth: {
                clientId: environment.clientId,
                authority: 'https://login.microsoftonline.com/' + environment.tenantId,
                redirectUri: environment.redirectUri
            },
            cache: {
                cacheLocation: BrowserCacheLocation.LocalStorage,
                storeAuthStateInCookie: true, // set to true for IE 11
            },
            system: {
                loggerOptions: {
                    loggerCallback: () => { },
                    piiLoggingEnabled: false
                }
            }
        });
}
