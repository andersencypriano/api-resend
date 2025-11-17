import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
  <div>
    <p>Nome: {name}</p>
    <p>E-mail: {email}</p>
    <p>Mensagem: {message}</p>
    <p>Data: {new Date().toLocaleDateString()}</p>
    <p>Hora: {new Date().toLocaleTimeString()}</p>
  </div>
);

export default EmailTemplate;