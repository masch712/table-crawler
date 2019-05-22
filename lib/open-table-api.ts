import fetch from "node-fetch";

async function searchAvailability() {
    fetch("https://www.opentable.com/restaurant/profile/2090/search", {
        // "credentials": "include",
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8"
        },
        // "referrer": "https://www.opentable.com/blue-hill",
        // "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            covers: 2,
            dateTime: '2019-05-21T19:00:00',
            isRedesign: true,
            availabilityToken: null,
            correlationId: '300af510-0584-4b6c-bce3-1207a039f344'
        }),
        "method": "POST",
        // "mode": "cors",
    });
}