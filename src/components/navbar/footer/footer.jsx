import style from './footer.module.css';

export const Footer = () => {
  return (
    <div className={style.contain}>
      <div className={style.adress}>
        <p>Mendoza, Argentina</p>
      </div>
      <div className={style.center}>
        <p>THERCARR</p>
      </div>
      <div className={style.social}>
        <a
          href="https://www.instagram.com/thercarr_mza?igsh=MWJ3c21jZXN5bG11bw=="
          target="_blank"
          rel="noopener noreferrer"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            // class="icon icon-tabler icon-tabler-brand-instagram"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61550796840312&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-facebook"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
        
      </div>
    </div>
  );
};
