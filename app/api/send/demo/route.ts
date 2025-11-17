import { createElement } from 'react';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../../components/forms/templateEmails/expert-template';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  const json = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = json?.name?.trim();
  const email = json?.email?.trim();
  const message = json?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields.' },
      { status: 400 },
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'delivered@resend.dev',
      to: [process.env.RESEND_TO_EMAIL ?? 'contato@cobrasis.com.br'],
      subject: '[DEMONSTRAÇÃO - Cobrasis]',
      react: createElement(EmailTemplate, {
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error('Erro do Resend:', error);
      return NextResponse.json(
        { error: error.message ?? 'Falha ao enviar e-mail.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ id: data?.id });
  } catch (error) {
    console.error('Erro inesperado ao enviar e-mail.', error);
    return NextResponse.json(
      { error: 'Erro interno ao enviar e-mail.' },
      { status: 500 },
    );
  }
}

