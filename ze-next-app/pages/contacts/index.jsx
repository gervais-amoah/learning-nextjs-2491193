import React from "react";
import contacts from "../../contacts";
import Link from "next/link";

function Contacts() {
  return (
    <div>
      <h1>This is the contact list</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            Name: {contact.name} <br />
            Country: {contact.country} <br />
            <Link href={`/contacts/${contact.id}`}>Open</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
