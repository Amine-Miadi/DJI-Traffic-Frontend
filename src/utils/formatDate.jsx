const formatDate = (intdate) => {
    const date = new Date(intdate);
    const options = {
    timeZone: 'GMT',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    };
    
    return (date.toLocaleString('en-US', options));
}

export default formatDate