import style from './contact.module.css';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className={style.title}>I am contact layout</h1>
      {children}
    </>
  );
}
