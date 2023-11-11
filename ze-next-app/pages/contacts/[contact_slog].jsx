import contacts from "@/contacts";
import { useRouter } from "next/router";
import React from "react";

function ContactDetails() {
  const router = useRouter();
  console.log(router);
  const contactId = router.query["contact_slog"];
  const contact = contacts.find((c) => c.id === contactId);

  return (
    <div>
      <h1>Contact {contact?.name} </h1>
    </div>
  );
}

export default ContactDetails;
