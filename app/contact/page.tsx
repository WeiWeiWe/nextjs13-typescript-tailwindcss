import { NextPage } from 'next';
import style from './contact.module.css';

interface IProps {}

const Contact: NextPage<IProps> = () => {
  return <div className={style.title}>Contact page</div>;
};

export default Contact;
