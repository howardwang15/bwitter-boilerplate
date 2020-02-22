
// converts JS timestamp to twitter-esque form
const formatDateBweet = dateString => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours > 12 ? 'PM' : 'AM';
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedDate = `${hours}:${minutes} ${ampm} - ${day} ${month} ${year}`;
    
    return formattedDate;
}

export { formatDateBweet }