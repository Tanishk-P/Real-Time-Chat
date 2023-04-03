export default function ChatDate({ date }) {
    const messageDate = date?.toDate();
  
    if (!messageDate) {
      return null;
    }
  
    const isToday = (date) => {
      const today = new Date();
      return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    };
  
    const isYesterday = (date) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear();
    };
  
    const formatDate = (date) => {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
        date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
  
    if (isToday(messageDate)) {
      return <small>{messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>;
    } else if (isYesterday(messageDate)) {
      return <small>Yesterday, {messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>;
    } else {
      return <small>{formatDate(messageDate)}</small>;
    }
  }
  