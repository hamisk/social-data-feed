// function to convert time in epoch ms to readable date with dynamic output
export default function epochToDynamic(epoch) {
    let epochDate = new Date(epoch);
    let readableDate = ``;

    let currentDate = new Date();
    let timeElapsed = (currentDate - epochDate)/1000;
    let minutes = Math.round(timeElapsed/60);
    let hours = Math.round(minutes/60);
    let days = Math.round(hours/24);
    let weeks = Math.round(days/7);
    let months = Math.round(weeks/4.35);
    let years = Math.round(months/12);

    if (timeElapsed < 30) {
        readableDate = `a few seconds ago`;
    } else if (timeElapsed < 60) {
        readableDate = `less than a minute ago`;
    } else if (timeElapsed < 240) {
        readableDate = `a few minutes ago`;
    } else if (timeElapsed < 3570) {
        readableDate = `${minutes} minutes ago`;
    } else if (hours < 24) {
        readableDate = `${hours}h ago`;
    } else if (days < 7) {
        readableDate = `${days}d ago`;
    } else if (weeks < 4) {
        readableDate = `${weeks}w ago`;
    } else if (months < 12) {
        readableDate = `${months}m ago`;
    } else {
        readableDate = `${years}y ago`;
    }

    return readableDate;
}

// function to convert epoch date to MM/DD/YYYY format
export function epochToMMDDYYYY(epoch) {
    let epochDate = new Date(epoch);
    let MM = `0${epochDate.getMonth() + 1}`;
    let DD = `0${epochDate.getDate()}`;
    let YYYY = epochDate.getFullYear();
    let readableDate = `${MM.slice(-2)}/${DD.slice(-2)}/${YYYY}`;

    return readableDate;
}