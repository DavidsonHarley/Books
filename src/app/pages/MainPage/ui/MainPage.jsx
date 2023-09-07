import React from 'react';
import cls from './MainPage.module.scss';
import SideBar from '../../../widgets/SideBar/ui/SideBar';
import BookContent from '../../../components/BookContent/BookContent';

export default function MainPage() {
  return (
    <div className={cls.mainPage}>
      <SideBar />
      <BookContent />
    </div>
  );
}
