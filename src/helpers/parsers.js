export const decodeHTMLEntities = (str) => {
    const element = document.createElement('div');
    if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }
    return str;
}


export const truncateText = (str) => {
    let string = str;
    if(str && typeof str === 'string' && str.length > 250) {
        string = str.substring(0, 250) + "...";
    }
    return string
}

export const formatDate = (date) => {
    let formattedDate = date
        if (formattedDate) {
            formattedDate = formattedDate.split("T")[0]
            formattedDate = formattedDate.split("-")
            formattedDate = `${formattedDate[1]}/${formattedDate[2]}/${formattedDate[0]}`
        }
    console.log(formattedDate)
    return formattedDate
}