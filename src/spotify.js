export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"

const clientId = "0263b431c2ce4f169e2cf07b4a059e30"

const scopes = [
    "user-read-current-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-rea",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((inital, item) => {
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponet(parts[1])
            return inital
        })
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`