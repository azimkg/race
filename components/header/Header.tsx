import React, { FC } from 'react';
import AppLink from 'common/appLink/AppLink';
import Container from 'common/container/Container';
import ModalAuth from 'components/modalAuth/ModalAuth';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import { TFunction } from 'i18next';
import AccountLink from './accountLink/AccountLink';
import DropdownLanguage from './dropdownLanguage/DropdownLanguage';
import cls from './header.module.css';


interface IHeader {
  t: TFunction
  locale: string
}
const Header: FC<IHeader> = async ({ t, locale }) => {
  return (
    <header className={cls.header}>
      <Container>
        <nav className={cls.nav}>
          <div>
            <div className={cls.header_logo}>
              <AppLink href={'/'}>
                <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.7484 13.2222H21.6555V28.7778H0V13.2222H3.90708V25.0133H8.87422V13.2222H12.7813V25.0133H17.7484V13.2222Z" fill="currentColor" />
                  <path d="M39.1922 28.7778H34.6491L29.1367 21.7156V28.7778H25.2297V13.2222H29.1367V20.0667L34.3462 13.2222H39.0105L32.9227 20.9067L39.1922 28.7778Z" fill="currentColor" />
                  <path d="M52.9505 26.8489C51.3957 28.4252 49.4977 29.2133 47.2565 29.2133C45.0152 29.2133 43.1172 28.4252 41.5624 26.8489C40.0278 25.2519 39.2606 23.3022 39.2606 21C39.2606 18.6978 40.0278 16.7585 41.5624 15.1822C43.1172 13.5852 45.0152 12.7867 47.2565 12.7867C49.4977 12.7867 51.3957 13.5852 52.9505 15.1822C54.5052 16.7585 55.2826 18.6978 55.2826 21C55.2826 23.3022 54.5052 25.2519 52.9505 26.8489ZM44.3186 24.08C45.106 24.8889 46.0853 25.2933 47.2565 25.2933C48.4276 25.2933 49.4069 24.8889 50.1943 24.08C50.9818 23.2711 51.3755 22.2444 51.3755 21C51.3755 19.7556 50.9818 18.7289 50.1943 17.92C49.4069 17.1111 48.4276 16.7067 47.2565 16.7067C46.0853 16.7067 45.106 17.1111 44.3186 17.92C43.5513 18.7289 43.1676 19.7556 43.1676 21C43.1676 22.2444 43.5513 23.2711 44.3186 24.08Z" fill="currentColor" />
                  <path d="M70.64 13.2222V28.7778H66.7329V17.08H62.5533V22.2756C62.5533 27.0874 60.423 29.2548 56.1626 28.7778V25.0133C56.9703 25.2207 57.5861 25.0859 58.0101 24.6089C58.4342 24.1111 58.6462 23.2607 58.6462 22.0578V13.2222H70.64Z" fill="currentColor" />
                  <path d="M85.6898 13.2222H89.5969V28.7778H85.6898V26.9422C84.5187 28.4563 82.8731 29.2133 80.7529 29.2133C78.7338 29.2133 76.9973 28.4252 75.5435 26.8489C74.1099 25.2519 73.3931 23.3022 73.3931 21C73.3931 18.6978 74.1099 16.7585 75.5435 15.1822C76.9973 13.5852 78.7338 12.7867 80.7529 12.7867C82.8731 12.7867 84.5187 13.5437 85.6898 15.0578V13.2222ZM78.4814 24.1733C79.2688 24.9822 80.2683 25.3867 81.4798 25.3867C82.6913 25.3867 83.6908 24.9822 84.4783 24.1733C85.2859 23.3437 85.6898 22.2859 85.6898 21C85.6898 19.7141 85.2859 18.6667 84.4783 17.8578C83.6908 17.0281 82.6913 16.6133 81.4798 16.6133C80.2683 16.6133 79.2688 17.0281 78.4814 17.8578C77.6939 18.6667 77.3002 19.7141 77.3002 21C77.3002 22.2859 77.6939 23.3437 78.4814 24.1733Z" fill="currentColor" />
                  <path d="M106.981 13.2222V28.7778H103.074V16.9867H97.0469V28.7778H93.1398V13.2222H106.981Z" fill="currentColor" />
                  <path d="M113.862 22.6489C114.387 24.5985 115.811 25.5733 118.133 25.5733C119.627 25.5733 120.758 25.0548 121.525 24.0178L124.675 25.8844C123.181 28.1037 120.98 29.2133 118.072 29.2133C115.568 29.2133 113.559 28.4356 112.045 26.88C110.531 25.3244 109.773 23.3644 109.773 21C109.773 18.6563 110.521 16.7067 112.015 15.1511C113.509 13.5748 115.427 12.7867 117.769 12.7867C119.99 12.7867 121.818 13.5748 123.251 15.1511C124.705 16.7274 125.432 18.677 125.432 21C125.432 21.5185 125.382 22.0682 125.281 22.6489H113.862ZM113.802 19.5378H121.525C121.303 18.48 120.839 17.6919 120.132 17.1733C119.445 16.6548 118.658 16.3956 117.769 16.3956C116.719 16.3956 115.851 16.6756 115.165 17.2356C114.478 17.7748 114.024 18.5422 113.802 19.5378Z" fill="currentColor" />
                  <path d="M137.094 13.2222H141.001V28.7778H137.094V23.8311C135.964 24.2044 134.762 24.3911 133.49 24.3911C131.653 24.3911 130.179 23.9141 129.068 22.96C127.978 22.0059 127.433 20.6163 127.433 18.7911V13.2222H131.34V18.3244C131.34 19.88 132.279 20.6578 134.157 20.6578C135.247 20.6578 136.226 20.4607 137.094 20.0667V13.2222Z" fill="currentColor" />
                  <path d="M156.055 13.2222H159.962V28.7778H156.055V26.9422C154.884 28.4563 153.238 29.2133 151.118 29.2133C149.099 29.2133 147.362 28.4252 145.909 26.8489C144.475 25.2519 143.758 23.3022 143.758 21C143.758 18.6978 144.475 16.7585 145.909 15.1822C147.362 13.5852 149.099 12.7867 151.118 12.7867C153.238 12.7867 154.884 13.5437 156.055 15.0578V13.2222ZM148.846 24.1733C149.634 24.9822 150.633 25.3867 151.845 25.3867C153.056 25.3867 154.056 24.9822 154.843 24.1733C155.651 23.3437 156.055 22.2859 156.055 21C156.055 19.7141 155.651 18.6667 154.843 17.8578C154.056 17.0281 153.056 16.6133 151.845 16.6133C150.633 16.6133 149.634 17.0281 148.846 17.8578C148.059 18.6667 147.665 19.7141 147.665 21C147.665 22.2859 148.059 23.3437 148.846 24.1733Z" fill="currentColor" />
                  <path d="M175.438 13.2222V17.08H170.713V28.7778H166.806V17.08H162.021V13.2222H175.438Z" fill="currentColor" />
                  <path d="M188.458 13.2222H191.366V28.7778H187.55V19.9422L180.432 28.7778H177.525V13.2222H181.341V22.0578L188.458 13.2222Z" fill="currentColor" />
                  <path d="M199.035 28.4044C198.53 28.923 197.924 29.1822 197.217 29.1822C196.511 29.1822 195.905 28.923 195.4 28.4044C194.895 27.8859 194.643 27.2637 194.643 26.5378C194.643 25.8119 194.895 25.1896 195.4 24.6711C195.905 24.1526 196.511 23.8933 197.217 23.8933C197.924 23.8933 198.53 24.1526 199.035 24.6711C199.539 25.1896 199.792 25.8119 199.792 26.5378C199.792 27.2637 199.539 27.8859 199.035 28.4044Z" fill="currentColor" />
                  <path d="M211.864 12.7867C213.903 12.7867 215.64 13.5852 217.073 15.1822C218.527 16.7585 219.254 18.6978 219.254 21C219.254 23.3022 218.527 25.2519 217.073 26.8489C215.64 28.4252 213.903 29.2133 211.864 29.2133C209.744 29.2133 208.108 28.4563 206.957 26.9422V35H203.05V13.2222H206.957V15.0578C208.108 13.5437 209.744 12.7867 211.864 12.7867ZM208.138 24.1733C208.926 24.9822 209.925 25.3867 211.137 25.3867C212.348 25.3867 213.348 24.9822 214.135 24.1733C214.943 23.3437 215.347 22.2859 215.347 21C215.347 19.7141 214.943 18.6667 214.135 17.8578C213.348 17.0281 212.348 16.6133 211.137 16.6133C209.925 16.6133 208.926 17.0281 208.138 17.8578C207.351 18.6667 206.957 19.7141 206.957 21C206.957 22.2859 207.351 23.3437 208.138 24.1733Z" fill="currentColor" />
                  <path d="M238.001 15.68C239.334 17.1526 240 18.9259 240 21C240 23.0741 239.334 24.8474 238.001 26.32C236.668 27.7926 234.841 28.6948 232.519 29.0267V35H228.703V29.0267C226.381 28.6948 224.553 27.7926 223.221 26.32C221.888 24.8474 221.222 23.0741 221.222 21C221.222 18.9259 221.888 17.1526 223.221 15.68C224.553 14.2074 226.381 13.3052 228.703 12.9733V7H232.519V12.9733C234.841 13.3052 236.668 14.2074 238.001 15.68ZM225.068 21C225.068 22.037 225.381 22.9289 226.007 23.6756C226.633 24.4222 227.532 24.9304 228.703 25.2V16.8C227.532 17.0696 226.633 17.5778 226.007 18.3244C225.381 19.0504 225.068 19.9422 225.068 21ZM232.519 25.1689C233.69 24.8993 234.579 24.4015 235.184 23.6756C235.81 22.9289 236.123 22.037 236.123 21C236.123 19.9422 235.81 19.0504 235.184 18.3244C234.579 17.5778 233.69 17.0696 232.519 16.8V25.1689Z" fill="currentColor" />
                </svg>
              </AppLink>
            </div>
            <div className={cls.links}>
              <AppLink href={'/lessons'} className={cls.link} activeClassName={cls.active}>{t('header.lessons')}</AppLink>
              <AppLink href={'/tests/time'} className={cls.link} activeClassName={cls.active}>{t('header.tests')}</AppLink>
              <AppLink href={'/about'} className={cls.link} activeClassName={cls.active}>{t('header.games')}</AppLink>
              <AppLink href={'/about'} className={cls.link} activeClassName={cls.active}>{t('header.statistic')}</AppLink>
              <AppLink href={'/themes'} className={cls.link} activeClassName={cls.active}>{t('header.themes')}</AppLink>
            </div>
          </div>
          <div>
            <DropdownLanguage lan={locale} />
            <ClientProviders>
              <AccountLink />
              <ModalAuth />
            </ClientProviders>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
