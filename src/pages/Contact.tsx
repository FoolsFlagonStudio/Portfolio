import { useEffect, useState } from 'react';
import { App, Button, Form, Input, Select } from 'antd';
import { site } from '../config/site';

interface Values {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const reasons = [
  { value: 'job', label: 'A job opportunity' },
  { value: 'project', label: 'A project I need built' },
  { value: 'other', label: 'Something else' },
];

export default function Contact() {
  const { message } = App.useApp();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Contact · Fools Flagon';
  }, []);

  const onFinish = async (v: Values) => {
    const reason = reasons.find((r) => r.value === v.reason)?.label ?? v.reason;
    if (!site.formEndpoint) {
      // No form service yet: hand off to the visitor's email app.
      const body = `${v.message}\n\n${v.name}\n${v.email}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${reason} - ${v.name}`)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setSending(true);
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...v, reason }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      message.error(`That didn't send. You can email me directly at ${site.email}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container">
      <section className="home-hero" style={{ paddingBottom: 96 }}>
        <div className="about-split">
          <div className="about-split__text" style={{ flexBasis: 360 }}>
            <p className="eyebrow">Contact</p>
            <h1 className="display">Let's talk.</h1>
            <p className="lead">Hiring, or have a project in mind? Send a note and I'll get back to you within a couple of days.</p>
            <div className="stack" style={{ marginTop: 28, gap: 8 }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            {sent ? (
              <div className="panel" style={{ padding: 32 }}>
                <h2 className="h2">Thanks, it's on its way.</h2>
                <p className="muted" style={{ margin: '10px 0 0' }}>I'll reply to the email you gave me.</p>
              </div>
            ) : (
              <div className="panel" style={{ padding: 28 }}>
                <Form<Values> layout="vertical" requiredMark={false} onFinish={onFinish} size="large">
                  <Form.Item label="What's this about?" name="reason" initialValue="project" rules={[{ required: true }]}>
                    <Select options={reasons} />
                  </Form.Item>
                  <Form.Item label="Your name" name="name" rules={[{ required: true, message: 'Please add your name' }]}>
                    <Input autoComplete="name" />
                  </Form.Item>
                  <Form.Item
                    label="Your email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please add a valid email' }]}
                  >
                    <Input type="email" autoComplete="email" />
                  </Form.Item>
                  <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please add a message' }]}>
                    <Input.TextArea rows={6} />
                  </Form.Item>
                  <Button type="primary" htmlType="submit" shape="round" loading={sending} block>
                    Send
                  </Button>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
