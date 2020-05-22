export const config = {
    apiKey: 'AIzaSyAAC95IM6sOl5mv3ba3cRvNvNpoTvI5FgY',
    clientId: "591145464095-jlg6htno9ohmmpfbv75hgm9hsp9uekpu.apps.googleusercontent.com",
    clientSecret: 'GWJ0t0MYWRysxnU2YU-cpxlW',
    discoveryDocs: "https://content.googleapis.com/discovery/v1/apis/photoslibrary/v1/rest",
    callbackUrl: 'http://localhost:8080//auth/google/callback',
    port: 8080,
    scope: [
        "https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.readonly"
    ],
    apiEndpoint: 'https://photoslibrary.googleapis.com'
}