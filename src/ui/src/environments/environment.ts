// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  requestApi: "https://hopkins-demo22-api-sc-hopkins-demo22-api.azuremicroservices.io",
  //requestApi: "http://localhost:8080",
  clientId: "dff2e8ce-7293-4ecd-a451-fd4fea5ec4d5",
  tenantId: "b02b0c6d-6218-42d2-830a-310854d90550",
  redirectUri: "https://localhost:4200/login/oauth2/code/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
