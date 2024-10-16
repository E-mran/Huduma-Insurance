interface ContactFormProps {
  details: {
    email: string;
    phone: string;
    firstName: string;
    secondName: string;
    subject: string;
    message: string;
  };
}

export async function sendContactEmail({ details }: ContactFormProps): Promise<number> {
  const { email, phone, firstName, secondName, subject, message } = details;

  const formData = {
    email,
    phone,
    firstName,
    secondName,
    subject,
    message,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Email sent successfully");
      return 200;
    } else {
      console.error("Failed to send email");
      return 503;
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return 500;
  }
}
