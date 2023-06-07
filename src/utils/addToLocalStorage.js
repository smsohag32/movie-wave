const addToLocalStorage = (ticketInfo) => {
   
    localStorage.setItem('ticket-user', JSON.stringify(ticketInfo));
}

export default addToLocalStorage;