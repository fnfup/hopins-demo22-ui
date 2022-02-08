

import { ProtectedResourceScopes } from "@azure/msal-angular";

export type ProtectedResourceMap = Map<string, (string | ProtectedResourceScopes)[] | null>;

// export type ProtectedResourceMap = [
//     string, string[] 
// ][];

// export type ProtectedResourceEntry = [
//     string, string[]
// ]

export type ProtectedResourceEntry = (string | ProtectedResourceScopes)[];

const demoApi = "hopkins-demo22-api-sc-hopkins-demo22-api.azuremicroservices.io";
const demoApiScopes: ProtectedResourceEntry = [
    "api://446ede82-f415-4e99-aed6-4d0e4ef93579/Full.Access",
    //"api://446ede82-f415-4e99-aed6-4d0e4ef93579/.default",
    //"Hopkins.Demo22.Read",
    //"Hopkins.Demo22.Order"
];

const azureMsGraph = "https://graph.microsoft.com/v1.0/me";
const azureMsGraphScopes: ProtectedResourceEntry = [
    'user.read'
];

export const protectedResourceMap: ProtectedResourceMap = new Map([
    [demoApi, demoApiScopes],
    [azureMsGraph, azureMsGraphScopes]
]);

