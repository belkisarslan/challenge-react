export default function Chat({contact, message, dispatch}) {
  return (
    <section className="chat m-2 p-2">
      <textarea className='w-96 rounded p-1'
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button className='bg-cyan-800 p-1 rounded w-96'
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: 'edited_message',
            message: '',
          });
        }}>
        Send to {contact.email}
      </button>
    </section>
  );
}