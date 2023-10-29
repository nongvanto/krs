import type { LucideProps } from 'lucide-react'
import { Indent, Outdent, LayoutDashboard, Settings, Sun, Moon } from 'lucide-react'

const Icons = {
  AppLogo: (props: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={116} height={19} viewBox='0 0 116 19' {...props}>
      <path
        d='M0.612793 0.26355V15.1333H4.68571V9.70105H6.868C9.08675 9.70105 11.1232 11.7375 11.1232 13.9042V18.4927H15.1909V12.8938C15.1909 10.675 13.9409 8.75313 11.5295 7.90938C13.8993 7.4823 15.2065 4.92501 15.2065 2.63334V0.26355H11.1232V1.64376C11.1232 4.46147 9.66488 6.34688 7.18571 6.34688H4.68571V0.26355H0.612793Z'
        fill='currentColor'
      />
      <path
        d='M21.4907 3.61768C18.3188 3.61768 15.9126 6.39893 15.9126 9.31038C15.9126 12.2791 18.5428 15.1333 21.5323 15.1333H23.9386V11.7739H22.7042C21.2876 11.7739 20.2042 10.675 20.2042 9.34684C20.2042 7.93018 21.2667 6.97705 22.6678 6.97705H24.8344V15.1333H28.7511V3.61768H21.4907Z'
        fill='currentColor'
      />
      <path
        d='M36.9205 3.61768H33.5612C31.3997 3.61768 29.6445 5.53955 29.6445 7.93018V15.1333H33.5612V8.8833C33.5612 7.83643 34.3632 6.97705 35.3528 6.97705H36.9205V3.61768Z'
        fill='currentColor'
      />
      <path
        d='M42.9454 3.61768C39.7735 3.61768 37.3672 6.39893 37.3672 9.31038C37.3672 12.2791 39.9974 15.1333 42.987 15.1333H45.3933V11.7739H44.1589C42.7422 11.7739 41.6589 10.675 41.6589 9.34684C41.6589 7.93018 42.7214 6.97705 44.1224 6.97705H46.2891V15.1333H50.2058V3.61768H42.9454Z'
        fill='currentColor'
      />
      <path
        d='M51.396 3.61768C51.2085 4.15934 51.0992 4.72184 51.0992 5.18538C51.0992 8.97705 56.3231 10.3573 56.3231 12.9146C56.3231 14.576 54.87 15.1333 53.3179 15.1333H50.8387V18.4927H54.3648C57.6304 18.4927 60.6148 16.6281 60.6148 12.8364C60.6148 7.59684 55.2398 6.94059 55.2033 4.66455C55.2033 4.34684 55.2815 4.01351 55.4481 3.61768H51.396Z'
        fill='currentColor'
      />
      <path
        d='M61.472 18.4927H65.3887V6.97705H67.4043C68.972 6.97705 70.0554 8.28434 70.0554 9.49788C70.0554 10.8416 68.8783 11.7739 67.4043 11.7739H66.2845V15.1333H68.7845C71.847 15.1333 74.347 12.6489 74.347 9.47705C74.347 6.1958 71.847 3.61768 68.8627 3.61768H61.472V18.4927Z'
        fill='currentColor'
      />
      <path
        d='M88.7153 9.38851C88.7153 5.71143 85.2621 3.22705 81.809 3.22705C78.3403 3.22705 74.8663 5.71143 74.8663 9.38851C74.8663 13.0812 78.2465 15.5239 81.7882 15.5239C85.3142 15.5239 88.7153 13.0812 88.7153 9.38851ZM81.8298 6.58643C83.3403 6.58643 84.4236 7.8208 84.4236 9.38851C84.4236 11.0291 83.3038 12.1646 81.809 12.1646C80.2986 12.1646 79.158 11.0291 79.158 9.38851C79.158 7.77914 80.3351 6.58643 81.8298 6.58643Z'
        fill='currentColor'
      />
      <path
        d='M96.6951 3.61768H93.3358C91.1743 3.61768 89.4191 5.53955 89.4191 7.93018V15.1333H93.3358V8.8833C93.3358 7.83643 94.1378 6.97705 95.1274 6.97705H96.6951V3.61768Z'
        fill='currentColor'
      />
      <path
        d='M101.246 0.26355H97.3293V11.5344C97.3293 13.6386 99.4543 15.1333 101.246 15.1333H105.111V11.774H102.59C101.751 11.774 101.246 11.4198 101.246 10.5448V6.97709H105.111V3.61772H101.246V0.26355Z'
        fill='currentColor'
      />
      <path
        d='M106.301 3.61768C106.114 4.15934 106.005 4.72184 106.005 5.18538C106.005 8.97705 111.228 10.3573 111.228 12.9146C111.228 14.576 109.775 15.1333 108.223 15.1333H105.744V18.4927H109.27C112.536 18.4927 115.52 16.6281 115.52 12.8364C115.52 7.59684 110.145 6.94059 110.109 4.66455C110.109 4.34684 110.187 4.01351 110.353 3.61768H106.301Z'
        fill='currentColor'
      />
    </svg>
  ),
  ShortLogo: (props: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} {...props}>
      <path
        d='M0.612793 0.26355V15.1333H4.68571V9.70105H6.868C9.08675 9.70105 11.1232 11.7375 11.1232 13.9042V18.4927H15.1909V12.8938C15.1909 10.675 13.9409 8.75313 11.5295 7.90938C13.8993 7.4823 15.2065 4.92501 15.2065 2.63334V0.26355H11.1232V1.64376C11.1232 4.46147 9.66488 6.34688 7.18571 6.34688H4.68571V0.26355H0.612793Z'
        fill='currentColor'></path>
    </svg>
  ),
  Facebook: (props: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' {...props}>
      <path
        fill='currentColor'
        d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
      />
    </svg>
  ),
  Google: (props: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='discord'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 488 512'
      {...props}>
      <path
        fill='currentColor'
        d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
      />
    </svg>
  ),
  Indent: Indent,
  Outdent: Outdent,
  Sun: Sun,
  Moon: Moon,
  Setting: Settings,
  LayoutDashboard: LayoutDashboard
}

export default Icons
