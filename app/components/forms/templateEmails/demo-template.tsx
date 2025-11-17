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
  <html>
    <body style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ color: '#333' }}>Solicitação de Demonstração - Cobrasis</h2>
        <p><strong>Nome:</strong> {name}</p>
        <p><strong>E-mail:</strong> {email}</p>
        <p><strong>Mensagem:</strong></p>
        <p style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>{message}</p>
        <p style={{ color: '#666', fontSize: '12px', marginTop: '20px' }}>
          Data: {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>
    </body>
  </html>
);

export default EmailTemplate;