export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list m-2 p-2">
        <ul>
          {contacts.map((contact) => (
            <li className="border-b" key={contact.id}>
              <button
                onClick={() => {
                  dispatch({
                    type: 'changed_selection',
                    contactId: contact.id,
                  });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }