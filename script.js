let extractMessage = (msg) => {
    for (const field in msg) {
        if(typeof msg[field] === 'object'){
          extractMessage(msg[field])
        }else{
            messages.push(msg[field]);
        }
    }
    return this.messages;
  }
